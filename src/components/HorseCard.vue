<template>
  <v-card max-width="100%"
          height="300px"
          class="">

<!--    <v-img class="white&#45;&#45;test align-end"-->
<!--           height="200px"-->
<!--          :src="horse.avatar"></v-img>-->

   <div class="d-flex flex-no-wrap justify-space-between">
     <div>
        <v-card-text
            class="backgroundColor:red"

        v-text="horse.name"/>

       <v-card-subtitle
       class=""
       v-text="horse.race"/>

       <v-card-actions>
         <v-btn icon>
           <v-icon>mdi-play</v-icon>
         </v-btn>
       </v-card-actions>

     </div>
     <v-avatar class="ma-3" size="250" tile>
       <v-img :src="horse.avatar"></v-img>
     </v-avatar>
   </div>
    <div >
      <img src=""/>
    </div>
  </v-card>
</template>

<script>
export default {
name: "HorseDetail.vue",
  comments:{

  },
  data(){
    return {
      horseTest:{
        id: -1,
        name: null,
        avatar: "@/assets/horse-witch.png",
        race: null,
        property: {
        },
        character:{
        },
        skill:{
        },
      }
    }
  },
  props:{
    horse: Object
  },
  watch:{
    // horse() {
    //   this.horsesList;
  // }
  }
}
</script>

<style scoped>

</style>