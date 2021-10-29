<template>
  <v-card max-width="500"
  class="">

   <div class="">
     <div>
        <v-card-text
            class=""
        v-text="horse.name"/>
       <v-card-subtitle
       class=""
       v-text="horse.race"/>
       <v-card-actions>
         <v-btn>
           <v-icon>mdi-play</v-icon>
         </v-btn>
       </v-card-actions>

       <v-avatar>
         <v-img :src="horse.avatar"></v-img>
       </v-avatar>

     </div>
   </div>
  </v-card>
</template>

<script>
export default {
name: "HorseDetail.vue",
  data(){
    return {
      horse:{
        id: -1,
        name: null,
        avatar: "",
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
    queryData: null
  }
}
</script>

<style scoped>

</style>