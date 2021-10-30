<template>
  <div>


    Courage:
    <v-progress-linear :height="barHeight"
                       :value="horseModel.curCourage/2"></v-progress-linear>
    Sport Skill:
    <v-progress-linear :height="barHeight"
                       :value="horseModel.curSportAbility/2"></v-progress-linear>

    Accurate:
    <v-progress-linear :height="barHeight"
                       :value="horseModel.curAccurateAbility/2"></v-progress-linear>

    Speed:
    <v-progress-linear :height="barHeight"
                       :value="horseModel.curSpeedAbility/2"></v-progress-linear>

    Cooperation:
    <v-progress-linear :height="barHeight"
                       :value="horseModel.curCooperateAbility"></v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "HorseStat",
  props: {
    horseModel: {
      type: Object
    },
    barHeight: {
      type: Number,
      default: 5,
    }
  }
}
</script>

<style scoped>

</style>
