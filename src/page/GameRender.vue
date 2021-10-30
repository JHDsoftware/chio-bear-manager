<template>
  <v-container fluid style="height: 100%"
               class="d-flex flex-column justify-space-between">
    <div class="d-flex justify-space-between">
      <h1>Game Map</h1>
    </div>
    <v-card v-if="gameIsStart" dark class="pa-2">
      <h4>CHIO Flow Step:{{ currentManIndex }}</h4>
      <span style="font-weight: 300">{{ flatText }}</span>
    </v-card>
    <div class="mt-2" style="background: #f6f6f6">
      <div class="pa-2" style="display: grid;
    grid-template-columns:repeat(12,24px);
     grid-template-rows: repeat(12,24px);
   ">
        <template v-for="i in mapSizeX*mapSizeY">
          <v-card
              elevation="0"
              tile
              :color="isActive(mapInfo[i-1])?'#E89B00':'transparent'"
              :key="i"
              style="width: 100%;height: 100%;margin: 4px;overflow: visible"
              :style="getSlotMarginString(mapInfo[i - 1])"
          >
            <template v-if="mapInfo[i-1]">
              <template v-if="hasMan(i)">
                <v-card color="primary" style="z-index: 100">
                  <v-icon color="white">mdi-horse-variant</v-icon>
                </v-card>
              </template>
              <template v-else-if="block(i).id===11">
                <div>
                  <v-icon>mdi-sign-caution</v-icon>
                </div>
              </template>
              <template v-else-if="block(i).id===12">
                <div>
                  <v-icon>mdi-solar-panel-large</v-icon>
                </div>
              </template>
              <template v-else-if="block(i).id===13">
                <div>
                  <v-icon>mdi-medical-bag</v-icon>
                </div>
              </template>
            </template>
            <template v-else>
              <v-card color="success" elevation="0">
                <v-icon>mdi-grass</v-icon>
              </v-card>
            </template>

          </v-card>
        </template>
      </div>
    </div>
    <template v-if="gameIsStart">

      <div
          class="flex-grow-1"
          style="display: grid;
        grid-template-columns: repeat(2,1fr)"
      >
        <div class="pa-2">
          <template>
            <h2>{{ horse.name }}</h2>
            <div>Stima
              <v-progress-linear color="warning" height="20"
                                 :buffer-value="horseStima"
                                 stream></v-progress-linear>
            </div>
            <div>Bravery
              <v-progress-linear color="error" height="20"
                                 :buffer-value="horseCourage"
                                 stream></v-progress-linear>
            </div>

          </template>
          <horse-stat :horse-model="horse"></horse-stat>

        </div>
        <div class="pa-2">
          <v-card class="pa-2">
            <div class="">
              <span class="caption">SCORE</span>
            </div>
            <div style="width: 100%;text-align: right">
              <h1>{{ score }}</h1>
            </div>
          </v-card>
          <v-card class="pa-2">
            <div class="">
              <span class="caption">Perform./Req.</span>
            </div>
            <div style="width: 100%;text-align: right">
              <h1>{{ perform + '/' + check }}</h1>
            </div>
          </v-card>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="pa-2">
        <h1>Leaderboard</h1>
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
      <div class="pa-2 mt-2">
        <h2>Next Horse</h2>
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Aaden</v-list-item-title>
              <v-list-item-subtitle>170cm/450kg</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
      <div class="pa-2">
        <v-btn @click="gameStart" class="mt-2" color="primary" block>Start Game</v-btn>
      </div>
    </template>
    <v-spacer></v-spacer>
  </v-container>

</template>

<script>
import {getRandomInt} from "@/modules/randomUtils";
import {shuffle} from "lodash-es";
import {
  blockLoop,
  EmptyBlock,
  HealVertical,
  Horse,
  LargeVerticalBarrier,
  VerticalBarrier
} from "@/modules/moduleIndex";
import {randomBlockIndexList} from "@/modules/spreadBlock";
import HorseStat from "@/components/HorseStat";


export default {
  name: "GameRender",
  components: {HorseStat},
  data: function () {
    return {
      mapSizeX: 12,
      horse: Object.assign({}, Horse, {
        curCourage: 100, curSportAbility: 56, name: "Amy",
        curCooperateAbility: 78, curAccurateAbility: 43, curSpeedAbility: 25,
        inGameCourage: 100, inGameSportAbility: 100, check: "-", perform: "-"
      }),
      horseList: ["Aaden", "Rabbit", "Amy", ""],
      flatText: "He move fast, goes through the flat land!.",
      mapSizeY: 12,
      currentManIndex: 1,
      speedMod: 1,
      gameIsStart: false,
      path: [],
      mapInfo: {}
    };
  },
  computed: {
    totalBlocks() {
      return this.path.filter(d => d.block?.id !== 10).length
    },
    score() {
      return this.horse.curScore
    },
    perform() {
      return this.horse.perform
    },
    check() {
      return this.horse.check
    },
    speed() {
      return 1 + (this.horse.curSpeedAbility / 100)
    },
    horseCourage() {
      return this.horse.inGameCourage
    },
    horseStima() {
      return this.horse.inGameSportAbility
    },
    pathWithMan() {
      return this.path.map((d, i) => {
        d.hasMan = this.currentManIndex === i
        return d
      })
    }
  },
  methods: {
    block(mapIndex) {
      return this.pathWithMan[this.pathIndex(mapIndex)]?.block ?? {id: -1}
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
        return 'margin-top:0;'
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
    shouldEndGame() {
      return (this.currentManIndex >= this.path.length)
          || this.horseCourage <= 0 ||
          this.horseStima <= 0 || !this.gameIsStart
    },
    async gameLoop() {
      const currentSlot = this.path[this.currentManIndex]
      const res = await blockLoop(this.horse, currentSlot.block, this.currentManIndex)
      switch (res) {
        case 2:
        case 4:
          this.flatText = "He move fast, goes through the flat land!."
          this.moveManToNextSlot()
          break
        case 8:
          this.flatText = "His attempt failed!"
          this.speedMod *= 0.9
          this.moveManToNextSlot(-1)
          break;
        case 16:
          this.flatText = "Huge fail!"
          this.speedMod = 1
          this.moveManToNextSlot(-2)
          break;

      }
      if (!this.shouldEndGame()) {
        setTimeout(this.gameLoop, 700 / (this.speed * this.speedMod))
      } else {
        this.gameIsStart = false
        this.flatText = "He is ending the game"
      }
    },
    moveManToNextSlot(speed = 1) {
      this.currentManIndex += speed
    },
    gameStart() {
      this.gameIsStart = true
      this.gameLoop()
    }
  },
  mounted() {
    while (this.generateMap() < 60) {
      this.path = []
      this.mapInfo = {}
    }
    const map = randomBlockIndexList(this.path.length, 3)
    this.path.forEach((d, i) => {
      const blocks = [EmptyBlock, VerticalBarrier, LargeVerticalBarrier, HealVertical]
      const id = map[i]
      d.block = blocks[id]
    })

  }
}
</script>

<style scoped>

</style>
