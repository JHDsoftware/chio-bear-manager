<template>
  <v-container fluid class="fill-height">
    <div>
      <h1>地图</h1>
      <div style="background: #f6f6f6">
        <div style="display: grid;
    grid-template-columns:repeat(16,18px);
     grid-template-rows: repeat(16,18px);
     grid-gap: 2px">
          <v-card :key="i"
                  style="width: 100%;height: 100%"
                  v-for="i in mapSizeX*mapSizeY">
            <template v-if="mapInfo[i]>0">{{ mapInfo[i] }}</template>
          </v-card>
        </div>
      </div>
    </div>


  </v-container>

</template>

<script>
import {getRandomInt} from "@/modules/randomUtils";

export default {
  name: "GameRender",
  data: function () {
    return {
      mapSizeX: 16,
      mapSizeY: 16,
      mapInfo: {}
    };
  },
  methods: {
    generateMap() {

    },
    fromIndexToXY(index, size, offset = 0) {
      return [index % size - offset, Math.floor(index / size) - offset]
    },
    fromXYToIndex(x, y, size) {
      return y * size + x
    },
    slotIsPossible(slotIndex) {
      const fitInBounds = function (number, bounds) {
        return number >= 0 && number <= bounds
      }
      const mapLimit = this.mapSizeY
      let [x, y] = this.fromIndexToXY(slotIndex, mapLimit)
      if (fitInBounds(x, mapLimit) && fitInBounds(y, mapLimit)) {
        if (this.mapInfo[slotIndex]) {
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    },
    getNextPossibleSlot(currentIndex = 0, currentCount = 1) {

      const direction = Math.floor(getRandomInt(3))*2+1
      console.log(direction)
      const moveToDirection = (direction, currentIndex) => {
        const [x, y] = this.fromIndexToXY(direction, 3, 1)
        const [currentX, currentY] = this.fromIndexToXY(currentIndex,
            this.mapSizeY, 0)
        const [afterX, afterY] = [currentX + x, currentY + y]
        return [afterX, afterY]
      }

      const [afterX, afterY] = moveToDirection(direction, currentIndex)
      const index = this.fromXYToIndex(afterX, afterY, this.mapSizeY)
      const setIndex = (index, count) => {
        this.$set(this.mapInfo, index, count)
      }


      if (this.slotIsPossible(index)) {
        setIndex(index, currentCount)
        return index
      } else {
        for (let i = 3; i >0; i--) {
          const [afterX, afterY] = moveToDirection(i*2+1, currentIndex)
          const index = this.fromXYToIndex(afterX, afterY, this.mapSizeY)
          if (this.slotIsPossible(index)) {
            console.log(index, 'this index is possible')
            setIndex(index, currentCount)
            return index
          }
        }
        return -1
      }

    },

  },
  mounted() {
    let i = 1;
    let slotIndex = 0
    while (i < 96) {
      slotIndex = this.getNextPossibleSlot(slotIndex, i)
      if (slotIndex < 0) {
        break
      }
      i++
    }
    console.log(this.mapInfo)
  }
}
</script>

<style scoped>

</style>
