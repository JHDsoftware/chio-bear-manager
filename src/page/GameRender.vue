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
      mapInfo: []
    };
  },
  methods: {
    generateMap() {

    },
    fromIndexToXY(index){
      return [index%this.mapSizeX,index/this.mapSizeY]
    },
    getNextPossibleSlot(currentIndex = 0) {
      const direction=getRandomInt(7)
      console.log(currentIndex,direction)
    }
  }
}
</script>

<style scoped>

</style>
