<template>
  <v-app >
    <v-app-bar
        app
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

      <v-container >
        <div style="display: grid;
        grid-gap: 10px">
          <template v-for="(horse,index) of horsesList" >
            <HorseDetail :horse="horse" :key="index"></HorseDetail>
          </template>
        </div>



      </v-container>
    </v-main>

  </v-app>

</template>

<script>
import HorseDetail from "../components/HorseCard";

export default {
  name: "Horses",
  components: {HorseDetail},
  data() {
    return {
      horses: {},

      horsesList: [
        {
          id: 1,
          name: "Eminy",
          race: "Witch",
          avatar: "http://i2.itc.cn/20180829/36b3_51604eaf_5988_b9aa_4f22_b8d9c4c2299c_1.jpg",
          property: {},
          character: {},
          skill: {},
        },
        {
          id: 2,
          name: "Amy",
          race: "Witch",
          avatar: "https://img3.jiemian.com/101/original/20181023/154026091835642000_a640x364.jpg",
          property: {},
          character: {},
          skill: {},
        },
        {
          id: 4,
          name: "Amy",
          race: "Witch",
          avatar: "https://ichef.bbci.co.uk/news/640/cpsprodpb/EA7F/production/_119713006_27999236-21fc-44c2-84a5-8be0eef78ceb.jpg",
          property: {},
          character: {},
          skill: {},
        },


        {
          id: 3,
          name: "Amy",
          race: "Witch",
          avatar: "http://photocdn.sohu.com/20080818/Img258957504.jpg",
          property: {},
          character: {},
          skill: {},
        },



      ]
    }
  }
}

</script>

<style scoped>

</style>
