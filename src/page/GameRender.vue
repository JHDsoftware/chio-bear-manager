<template>
  <v-container fluid class="fill-height">
    <div>
      <h1>地图</h1>
      <div style="background: #f6f6f6">
        <div style="display: grid;
    grid-template-columns:repeat(16,24px);
     grid-template-rows: repeat(16,24px);
   ">
          <template v-for="i in mapSizeX*mapSizeY">
            <v-card
                elevation="0"
                tile
                :color="isActive(mapInfo[i-1])?'primary':'transparent'"
                :key="i"
                style="width: 100%;height: 100%;margin: 4px;"
                :style="getSlotMarginString(mapInfo[i - 1])"
            >
              <template v-if="mapInfo[i-1]">
                {{ mapInfo[i - 1].count }}
              </template>
            </v-card>
          </template>

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
      mapSizeY: 16,
      path: [],
      mapInfo: {}
    };
  },
  methods: {
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
      console.log(a, b)
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

    getNextPossibleSlot(currentIndex = 0, currentCount = 1) {
      const way = [1, 3, 5, 7]
      const direction = way[(getRandomInt(3))]

      const setIndex = (x, y, count) => {
        const index = this.fromXYToIndex(x, y, this.mapSizeY)
        const [oldX, oldY] = this.fromIndexToXY(currentIndex, this.mapSizeY)
        this.path.push({count, x, y})
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

  },
  mounted() {
    //this.generateMap()
    while (this.generateMap() < 90) {
      this.mapInfo = {}
    }
    console.log(this.mapInfo)
  }
}
</script>

<style scoped>

</style>
