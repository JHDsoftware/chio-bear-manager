<template>
  <v-card max-width="100%"
          elevation="0">

    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{ horse.pedigree }}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ horse.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{horse.pedigreeCharacterName.join(',')}} </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
              tile
              size="80"
              color="grey"
      >
        <v-img :src="horse.avatar"></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-divider/>
  </v-card>

</template>

<script>
export default {
  name: "HorseDetail.vue",
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
        pedigreeCharacterName: [], //特性名称
        skillIds: [], //技巧列表
        skillName: [], //技巧名称
        curCourage: 0,
        curSportAbility: 0,
        curAccurateAbility: 0,
        curSpeedAbility: 0,
        curCooperateAbility: 0,
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
