<template>
  <!--  <v-app >-->
  <!--    <v-app-bar-->
  <!--        app-->
  <!--        dark-->
  <!--        color="blue">-->
  <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
  <!--      <v-toolbar-title>-->
  <!--        Horse List-->
  <!--      </v-toolbar-title>-->
  <!--      <v-spacer></v-spacer>-->
  <!--      <span>CHIO Aachen CAMPUS</span>-->
  <!--    </v-app-bar>-->
  <!--    <v-main>-->

  <div>
    <v-card>
      <div class="d-flex justify-lg-space-between "
           style="align-content: center;
                background-color: darkslateblue;
                color: white;
                font-size: 30px"
      >
        <span style="margin-left: 10px">Horse List</span>
        <v-spacer></v-spacer>
        <span style="margin-right: 10px">CHIO Aachen CAMPUS</span>
      </div>
    </v-card>
    <v-container>
      <div style="display: grid;
        grid-gap: 10px">
        <template v-for="(horse,index) in horsesList" >
          <HorseDetail :horse="horse" :key="index" @click="seeDetail"></HorseDetail>
        </template>
      </div>


    </v-container>
  </div>
  <!--    </v-main>-->

  <!--  </v-app>-->

</template>

<script>
import HorseDetail from "../components/HorseCard";

export default {
  name: "Horses",
  components: {HorseDetail},
  methods:{
    seeDetail(){

    }
  },
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
