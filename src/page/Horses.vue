<template>
  <v-app >
    <v-app-bar
        app
        absolute
        dark
        color="blue">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        Horse List
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span>CHIO Aachen CAMPUS</span>
<!--      <v-spacer></v-spacer>-->
<!--      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>-->
    </v-app-bar>
    <v-main>

      <v-container>


        <HorseDetail :horsesList="horseTest"></HorseDetail>

      </v-container>
    </v-main>

  </v-app>

</template>

<script>
import HorseDetail from "./HorseDetail";

export default {
  name: "Hoses.vue",
  components: {HorseDetail},
  data() {
    return {
      horses:{},

      horseTest: {
        id: 1,
        name: "Eminy",
        race: "Witch",
        avatar: "../assets/horse-witch.png",
        property: {
        },
        character:{
        },
        skill:{
        },

      }
    }
  }
}

</script>

<style scoped>

</style>