<template>
  <div>
    hier ist detail
    <img :src="horse.background"/>
  </div>
</template>

<script>
export default {
  name: "HorseDetail.vue",
  data() {
    return {
      horse: {
        background:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLo44E49YbMLPr5JMx8OVKv5UKheHz1FGlg&usqp=CAU"
      }
    }
  },
  created() {
    const _data = this.$route.query.data;

    this.horse = Object.assign(this.horse,_data)
  },
  methods:{
    getQuery(){

    }
  }
}
</script>

<style scoped>

</style>