<template>
  <v-card max-width="100%"
          height="400px"
          class="">

<!--    <v-img class="white&#45;&#45;test align-end"-->
<!--           height="200px"-->
<!--          :src="horse.avatar"></v-img>-->


   <div >
     <div>
       <template v-if="horse.id%2">
         <div class="d-flex flex-no-wrap justify-space-between">

         <v-avatar class="ma-3" size="250" tile>
           <v-img :src="horse.avatar"></v-img>
         </v-avatar>

           <div>
             <v-card-text class="backgroundColor:red" v-text="horse.name"/>
             <v-card-subtitle class="" v-text="horse.race"/>
             <v-card-actions>
               <v-btn icon>
                 <v-icon>mdi-play</v-icon>
               </v-btn>
             </v-card-actions>
           </div>

         </div>
       </template>
       <template v-else>

         <div class="d-flex flex-no-wrap justify-space-between">
         <div >
           <div>
             <v-card-text class="backgroundColor:red" v-text="horse.name"/>
             <v-card-subtitle class="" v-text="horse.race"/>
           </div>
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
       </template>
     </div>

   </div>

<!--    <v-card-actions>-->
<!--      <v-btn icon>-->
<!--        <v-icon>mdi-play</v-icon>-->
<!--      </v-btn>-->
<!--    </v-card-actions>-->
<!--    <div style="width: 100%; height: 100px">-->
<!--      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLo44E49YbMLPr5JMx8OVKv5UKheHz1FGlg&usqp=CAU"/>-->
<!--    </div>-->
  </v-card>
</template>

<script>
export default {
name: "HorseDetail.vue",
  comments:{

  },
  data(){
    return {
      orderOdd: false,
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