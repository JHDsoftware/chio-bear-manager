<template>
    <v-container>
      <h1>My Horses</h1>
      <v-divider></v-divider>
      <div v-if= "horsesList.length > 0" class="mt-4" style="display: grid;
        grid-gap: 10px" >
        <template v-for="(horse,index) in horsesList" >
          <div :key="index">
          <HorseDetail
              :horse="horse"
              ></HorseDetail>
          </div>
        </template>
      </div>
    <template v-else>
        <v-card elevation="0" height="300" class="d-flex align-center justify-center flex-grow-1">
            <v-icon
            >
                mdi-horse
            </v-icon> Get your nice horse first
        </v-card>
    </template>
    </v-container>
</template>

<script>
import HorseDetail from "../components/HorseCard";
import {myHorseList} from '../modules/moduleIndex';

export default {
  name: "Horses",
  components: {HorseDetail},
  methods:{

  },
  data() {
    return {
      horses: {},
      items: [
        {
          src: 'https://www.daimani.com/dvh-media/EHP-Chio-Aachen-2019-Atmosphere-EHP-DAIMANI-VIPTickets.jpg?context=bWFzdGVyfGltYWdlc3wxNzkyNjd8aW1hZ2UvanBlZ3xoYmMvaGRjLzg4NTI0NTY5NjQxMjYvRUhQLUNoaW8tQWFjaGVuLTIwMTktQXRtb3NwaGVyZS1FSFAtREFJTUFOSS1WSVBUaWNrZXRzLmpwZ3wyMjdmYTg3ZjkzY2I4Y2Q5NzY0NGIyZDc1YzUxMmM3NThhNTBmNDc4Mjg0ODdhOTAyZDY2MDJjZDlhMjdkNmJk',
        },
        {
          src: 'https://www.sportschau.de/pferdesport/chio/chio-aachen-190~_v-gseagaleriexl.jpg',
        },
        {
          src: 'https://rp-online.de/imgs/32/2/9/3/5/3/8/2/9/tok_57a3986c626264ed78729b920db75cc5/w1900_h1266_x1500_y1000_DPA_bfunk_dpa_5F9DE400C4E140AB-24e33e073926a941.jpg',
        }
      ],

      xhorsesList: [
        {
          id: 1,
          name: "Eminy",
          avatar: "http://i2.itc.cn/20180829/36b3_51604eaf_5988_b9aa_4f22_b8d9c4c2299c_1.jpg",
          pedigreeId: 0, //种族
          pedigree: "Iceland Horse", //种族
          pedigreeCharacterIds: [], //特性列表
          pedigreeCharacterName: ["比较平庸","耐力好","比较温顺"], //特性名称
          skillIds: [], //技巧列表
          skillName: [], //技巧名称
          curCourage: 11,
          curSportAbility: 11,
          curAccurateAbility: 11,
          curSpeedAbility: 11,
          curCooperateAbility: 11,
        },
        {
          id: 2,
          name: "Amy",
          avatar: "https://img3.jiemian.com/101/original/20181023/154026091835642000_a640x364.jpg",
          pedigreeId: 0, //种族
          pedigree: "Hannover Horse", //种族
          pedigreeCharacterIds: [], //特性列表
          pedigreeCharacterName: ["强壮温和"], //特性名称
          skillIds: [], //技巧列表
          skillName: [], //技巧名称
          curCourage: 20,
          curSportAbility: 20,
          curAccurateAbility: 20,
          curSpeedAbility: 20,
          curCooperateAbility: 20,
        },
        {
          id: 3,
          name: "Linda",
          avatar: "https://ichef.bbci.co.uk/news/640/cpsprodpb/EA7F/production/_119713006_27999236-21fc-44c2-84a5-8be0eef78ceb.jpg",
          pedigreeId: 0, //种族
          pedigree: "Alabish Horse", //种族阿拉伯
          pedigreeCharacterIds: [], //特性列表
          pedigreeCharacterName: ["极为劣性","亢奋易冲动"], //特性名称
          skillIds: [], //技巧列表
          skillName: [], //技巧名称
          curCourage: 32,
          curSportAbility: 32,
          curAccurateAbility: 32,
          curSpeedAbility: 32,
          curCooperateAbility: 32,
        },
        {
          id: 4,
          name: "Feya",
          avatar: "http://photocdn.sohu.com/20080818/Img258957504.jpg",
          pedigreeId: 0, //种族
          pedigree: "Paso Fino", //种族帕索菲诺
          pedigreeCharacterIds: [], //特性列表
          pedigreeCharacterName: ["小巧灵活"], //特性名称
          skillIds: [], //技巧列表
          skillName: [], //技巧名称
          curCourage: 88,
          curSportAbility: 88,
          curAccurateAbility: 88,
          curSpeedAbility: 88,
          curCooperateAbility: 88,
        },
      ],

    }
  },


   computed: {
       horsesList() {
           return myHorseList
       }
   }

}

</script>

<style scoped>

</style>
