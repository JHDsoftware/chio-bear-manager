<template>
  <v-card max-width="500"
          class="">
    <v-system-bar color="pink darken-2">
      <v-spacer></v-spacer>
      <v-icon>mdi-window-minimize</v-icon>
      <v-icon>mdi-window-maximize</v-icon>
      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-app-bar
        dark
        color="blue">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        CHIO Aachen CAMPUS
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
    </v-app-bar>

    <v-container>
      <span>Horse List</span>

      <HorseDetail :property="horseTest"></HorseDetail>

    </v-container>

  </v-card>
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