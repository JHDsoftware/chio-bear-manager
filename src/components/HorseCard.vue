<template>
  <v-card
      class="d-flex justify-space-between"
      elevation="0" @click="seeDetail">
    <div class="flex-grow-1">
      <h1>{{ horse.name.replace(horse.name[0],horse.name[0].toUpperCase()) }}</h1>

      <div class="font-weight-bold">
        Level:{{getRandomInt(10)}}
        <v-progress-linear color="warning" :value="getRandomInt(100)" striped height="10"></v-progress-linear>
      </div>
      <v-chip outlined class="mt-2" label small color="error">{{ horse.pedigree }}</v-chip>
      <div class="mt-2">
        <v-list-item-subtitle>{{ horse.pedigreeCharacterName }}</v-list-item-subtitle>
      </div>

      </div>
    <div class="pa-2 pr-4">
      <h3>Status</h3>
      <horse-stat style="width: 144px" :horse-model="horse"></horse-stat>
    </div>
  </v-card>

</template>

<script>
import HorseStat from "@/components/HorseStat";
import {getRandomInt} from "@/modules/randomUtils";

export default {
  name: "HorseCard",
  components: {HorseStat},
  comments: {},
  data() {
    return {
      orderOdd: false,
      horseTest: {
        id: -1,
        name: "",
        pedigreeId: 0, //种族
        pedigree: "", //种族
        pedigreeCharacterIds: [], //特性列表
        pedigreeCharacterName: "", //特性名称
        skillIds: [], //技巧列表
        skillName: [], //技巧名称
        curCourage: 0,
        curSportAbility: 2,
        curAccurateAbility: 3,
        curSpeedAbility: 3,
        curCooperateAbility: 5,
      }
    }
  },
  props: {
    horse: Object,

  },
  watch: {
    // horse() {
    //   this.horsesList;
    // }
  },
  methods: {
getRandomInt,
    seeDetail() {
      this.$router.push({
        path: '/horseDetail',
        query: {
          data: this.horse
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
