<template>
  <v-container fluid class="fill-height">
    <div>
      <div class="d-flex justify-space-between">
        <h1>Game Map</h1>
        <h1>Loop: 15</h1>
      </div>
      <div style="background: #f6f6f6">
        <div style="display: grid;
    grid-template-columns:repeat(16,24px);
    grid-gap: 2px;
     grid-template-rows: repeat(16,24px);
   ">
          <template v-for="i in mapSizeX*mapSizeY">
            <v-card
                elevation="0"
                tile
                :color="isActive(mapInfo[i-1])?'white':'transparent'"
                :key="i"
                style="width: 100%;height: 100%;margin: 4px;overflow: visible"
                :style="getSlotMarginString(mapInfo[i - 1])"
            >
              <template v-if="mapInfo[i-1]">
                <template v-if="hasMan(i)">
                  <v-card color="warning" style="z-index: 100">
                    <v-icon>mdi-hard-hat</v-icon>
                  </v-card>
                </template>
                <template v-else-if="content(mapInfo[i-1].count)==='barrier'">
                  <div>
                    <v-icon>mdi-sign-caution</v-icon>
                  </div>
                </template>
              </template>

            </v-card>
          </template>

        </div>
      </div>

      <div style="display: grid;grid-template-columns: repeat(2,1fr)">

        <div class="pa-2">
          <h2>Horse Status</h2>
          <div>Stima
            <v-progress-linear color="warning" height="20"
                               buffer-value="43"
                               stream></v-progress-linear>
          </div>
          <div>Bravery
            <v-progress-linear color="error" height="20"
                               buffer-value="22"
                               stream></v-progress-linear>
          </div>
          <v-btn class="mt-2" color="primary" block>Start Game</v-btn>
        </div>
        <div class="pa-2">
          <h2>Leaderboard</h2>
          <v-card dark class=" d-flex pa-2">
            <div>Ongoing Aaden</div>
            <v-spacer></v-spacer>
            <v-icon color="white">mdi-hard-hat</v-icon>
          </v-card>
          <v-card elevation="0" outlined tile class=" d-flex pa-2">
            <div>1. Falcon</div>
            <v-spacer></v-spacer>
            <v-icon>mdi-numeric-1</v-icon>
          </v-card>
          <v-card elevation="0" outlined tile class=" d-flex pa-2">
            <div>2. Falcon</div>
            <v-spacer></v-spacer>
            <v-icon>mdi-numeric-1</v-icon>
          </v-card>
          <v-card elevation="0" outlined tile class=" d-flex pa-2">
            <div>3. Falcon</div>
            <v-spacer></v-spacer>
            <v-icon>mdi-numeric-1</v-icon>
          </v-card>
          <v-card elevation="0" outlined tile class=" d-flex pa-2">
            <div>4. Falcon</div>
            <v-spacer></v-spacer>
            <v-icon>mdi-numeric-1</v-icon>
          </v-card>
          <v-card elevation="0" outlined tile class=" d-flex pa-2">
            <div>5. Falcon</div>
            <v-spacer></v-spacer>
            <v-icon>mdi-numeric-1</v-icon>
          </v-card>
        </div>

      </div>


    </div>


  </v-container>

</template>

<script>
import {getRandomInt} from "@/modules/randomUtils";
import {shuffle} from "lodash-es";

export default {
  name: "GameRender",
  data: function () {
    return {
      mapSizeX: 16,
      horseList:["Aaden","Rabbit","Amy",""],
      mapSizeY: 16,
      currentManIndex: 1,
      path: [],
      mapInfo: {}
    };
  },
  computed: {
    pathWithMan() {
      return this.path.map((d, i) => {
        d.hasMan = this.currentManIndex === i
        return d
      })
    }
  },
  methods: {
    content(pathIndex) {
      return this.path[pathIndex]?.content.type
    },
    hasMan(mapIndex) {
      return this.pathWithMan[this.pathIndex(mapIndex)]?.hasMan
    },
    pathIndex(mapIndex) {
      return this.mapInfo[mapIndex - 1].count
    },
    isActive(slot) {
      return !!slot
    },
    getSlotMarginString(slot) {
      return slot ? slot.comesFrom + slot.goesTo : ""
    },
    generateMap() {
      let i = 1;
      let slotIndex = 0
      this.mapInfo[0] = {count: i}
      i++
      while (i < 96) {
        slotIndex = this.getNextPossibleSlot(slotIndex, i)
        if (slotIndex < 0) {
          break
        }
        i++
      }
      return i
    },
    fromIndexToXY(index, size, offset = 0) {
      return [index % size - offset, Math.floor(index / size) - offset]
    },
    fromXYToIndex(x, y, size) {
      return y * size + x
    },
    fitInBounds(number) {
      return number >= 0 && number < this.mapSizeY
    },
    slotIsPossible(x, y) {
      const slotIndex = this.fromXYToIndex(x, y, this.mapSizeY)
      if (this.slotInMap(x, y)) {
        const nearNodes = this.nearbySlots(x, y).map(([x, y]) => this.nearbySlots(x, y)).flat().filter(([x, y]) =>
            this.slotAlreadyInMap(x, y)
        ).length
        console.log(nearNodes, 'already In map')
        return nearNodes < 4 && !this.mapInfo[slotIndex];
      } else {
        return false
      }
    },
    slotInMap(x, y) {
      return this.fitInBounds(x) && this.fitInBounds(y)
    },
    slotAlreadyInMap(x, y) {
      const slotIndex = this.fromXYToIndex(x, y, this.mapSizeY)
      return this.mapInfo[slotIndex]?.count > 0
    },
    nearbySlots(x, y) {
      let way = shuffle([1, 3, 5, 7])
      const res = []
      for (const i of way) {
        const [afterX, afterY] = this.nearSlotIn(i, x, y)
        if (this.slotInMap(afterX, afterY)) {
          res.push([afterX, afterY])
        }
      }
      return res
    },
    nearSlotIn(direction, currentX, currentY) {
      const [x, y] = this.fromIndexToXY(direction, 3, 1)
      const [afterX, afterY] = [currentX + x, currentY + y]
      return [afterX, afterY]
    },
    isAtMy(a, b) {
      if (a.x - b.x === 1) {
        return 'margin-left:0;'
      } else if (a.x - b.x === -1) {
        return 'margin-right:0;'
      } else if (a.y - b.y === 1) {
        return 'margin-right:0;'
      } else {
        return 'margin-bottom:0;'
      }
    },
    addNewPointToMap(count, x, y) {
      this.path.push({count, x, y})
    },
    getNextPossibleSlot(currentIndex = 0, currentCount = 1) {
      const way = [1, 3, 5, 7]
      const direction = way[(getRandomInt(3))]

      const setIndex = (x, y, count) => {
        const index = this.fromXYToIndex(x, y, this.mapSizeY)
        const [oldX, oldY] = this.fromIndexToXY(currentIndex, this.mapSizeY)
        this.addNewPointToMap(count, x, y)
        this.$set(this.mapInfo, index, {count, x, y, comesFrom: this.isAtMy({x, y}, {x: oldX, y: oldY})})
        this.$set(this.mapInfo[currentIndex], 'goesTo', this.isAtMy({x: oldX, y: oldY}, {x, y}))
        return index
      }

      const [afterX, afterY] = this.nearSlotIn(direction, ...this.fromIndexToXY(currentIndex, this.mapSizeY))

      if (this.slotIsPossible(afterX, afterY)) {
        return setIndex(afterX, afterY, currentCount)
      } else {
        const nearSlots = this.nearbySlots(...this.fromIndexToXY(currentIndex, this.mapSizeY))
        for (const [x, y] of nearSlots) {
          if (this.slotIsPossible(x, y)) {
            return setIndex(x, y, currentCount)
          }
        }

        return -1
      }

    },

    gameLoop() {
      this.moveManToNextSlot()
    },
    moveManToNextSlot() {
      this.currentManIndex++
    },
    gameStart() {
      setInterval(this.moveManToNextSlot, 1000)
    }
  },
  mounted() {
    while (this.generateMap() < 90) {
      this.path = []
      this.mapInfo = {}
    }
    this.path.forEach((d) => {
      if (getRandomInt(10) > 8) {
        d.content = {
          type: "barrier"
        }
      } else {
        d.content = {
          type: "flat"
        }
      }


    })
    console.log(this.path)

  }
}
</script>

<style scoped>

</style>
