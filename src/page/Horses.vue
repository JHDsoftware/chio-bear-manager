<template>
    <v-container>
      <v-carousel height="250">
        <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
        ></v-carousel-item>
      </v-carousel>

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
