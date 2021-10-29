<template>
  <v-card max-width="500"
  class="">

   <div class="">
     <div>
        <v-card-text
            class=""
        v-text="horsesList.name"/>

       <v-card-subtitle
       class=""
       v-text="horsesList.race"/>

       <v-card-actions>
         <v-btn icon>
           <v-icon>mdi-play</v-icon>
         </v-btn>
       </v-card-actions>

       <v-avatar class="ma-3" size="125" tile>
         <v-img src="horsesList.avatar"></v-img>
       </v-avatar>

     </div>
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
      horse:{
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
    horsesList: Object
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