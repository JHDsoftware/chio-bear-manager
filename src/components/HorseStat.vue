<template>
  <div>


    Courage:
    <v-progress-linear height="10"
                       :value="horseModel.curCourage"></v-progress-linear>
    Sport Skill:
    <v-progress-linear height="10"
                       :value="horseModel.curSportAbility"></v-progress-linear>

    Accurate:
    <v-progress-linear height="10"
                       :value="horseModel.curAccurateAbility"></v-progress-linear>

    Speed:
    <v-progress-linear height="10"
                       :value="horseModel.curSpeedAbility"></v-progress-linear>

    Cooperation:
    <v-progress-linear height="10"
                       :value="horseModel.curCooperateAbility"></v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "HorseStat",
  props: {
    horseModel: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
