<template>
  <v-card
      class="d-flex justify-space-between"
      elevation="0" @click="seeDetail">
    <div>
      <h1>{{ horse.name }}</h1>
      <div>
        Level:20
        <v-progress-linear color="warning" value="25" striped height="20"></v-progress-linear>
      </div>
      {{ horse.pedigree }}
      <v-list-item-subtitle>{{ horse.pedigreeCharacterName }}</v-list-item-subtitle>
    </div>
    <div class="pa-2 pr-4">
      <h3>Status</h3>
      <horse-stat style="width: 144px" :horse-model="horse"></horse-stat>
    </div>
  </v-card>

</template>

<script>
import HorseStat from "@/components/HorseStat";

export default {
  name: "HorseDetail.vue",
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
