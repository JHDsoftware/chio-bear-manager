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
            <template v-if="mapInfo[i]">{{ mapInfo[i] }}</template>
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
    getNextPossibleSlot(currentIndex = 0, currentCount = 1) {

      const direction = getRandomInt(8)
      const [x, y] = this.fromIndexToXY(direction, 3, 1)
      const [currentX, currentY] = this.fromIndexToXY(currentIndex,
          this.mapSizeY, 0)
      console.log(currentX, currentY, 'currentIndex')
      const mapLimit = this.mapSizeY
      const fitInBounds = function (number, bounds) {
        return number >= 0 && number <= bounds
      }
      const [afterX, afterY] = [currentX + x, currentY + y]
      console.log(afterX,afterY,'afterIndex')
      if (fitInBounds(afterX, mapLimit) && fitInBounds(afterY, mapLimit)) {
        const slotCount = this.fromXYToIndex(afterX, afterY, mapLimit)
        if (this.mapInfo[slotCount]) {
          return this.getNextPossibleSlot(currentIndex, currentCount)
        } else {
          this.mapInfo[slotCount] = currentCount
          return slotCount
        }
      } else {
        return this.getNextPossibleSlot(currentIndex, currentCount)
      }
    },

  },
  mounted() {
    let i = 1;
    let slotIndex = 0
    while (i < 96) {
      slotIndex = this.getNextPossibleSlot(slotIndex, i)
      i++
    }
    console.log(this.mapInfo)
  }
}
</script>

<style scoped>

</style>
