<template>
  <v-container fluid>
    <v-row>
      <v-card width="1000" height="200px" color="black">
        <v-card-title class="white--text mt-8">
          <v-avatar size="88">
            <img
                alt="user"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVR3NzxK-lq23YxvqlEkC1BUHNJRp5qC-41w&usqp=CAU"
            >
          </v-avatar>
          <p class="ml-3 text-h4 text--white">
            CHIO Aachener
          </p>
        </v-card-title>

      </v-card>
    </v-row>
    <v-row>
      <v-tabs
          v-model="tab"
          center-active
          fixed-tabs
          background-color="transparent"
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab
            v-for="item in items"
            :key="item"
        >
          {{ item }}
        </v-tab>
        <v-tab-item>
          <template v-for="(horse,index) in horsesList">
            <div :key="index">
              <v-card
                  class="mx-auto mt-4 ml-4 mr-4"
                  outlined
              >
                <v-list-item three-line>
                  <v-list-item-avatar
                      tile
                      size="80"
                      color="grey"
                  >
                    <v-img src="../assets/jumping.png"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <div class="text-overline mb-4">
                      {{ horse.pedigree }}
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                      €100
                    </v-list-item-title>
                    <v-list-item-subtitle>{{
                        horse.pedigreeCharacterName.join(',')
                      }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                  <v-spacer/>
                  <v-btn
                      outlined
                      rounded
                      text
                  >
                    Buy
                  </v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </template>
        </v-tab-item>
        <v-tab-item>
          <v-card style="height: 600px;position: relative" @click="findHorse()">
            <v-img
                height="600px"
                src="../assets/caoyuan.jpeg"
            >
            </v-img>
            <v-btn x-large dark
                   style="width: 90%;
                   position: fixed;
                    bottom: 96px;
                    margin-left: 5%">
              Find a Horse {{ initChance }}

            </v-btn>
          </v-card>
          <v-dialog
              v-model="findHorseDialog"
          >
            <v-card
                class="mx-auto"
                outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-text-field
                      label="Happy"
                      v-model=horseModel.name
                  ></v-text-field>
                  <div class="text-h5 mb-1">
                    {{ horseModel.pedigree }}
                  </div>
                  <v-list-item-title class="mb-1">
                    <v-card elevation="0">
                      <div class="pa-1">
                        <template v-for="(mod, t) in horseModel.pedigreeCharacterName.split(',')">
                          <v-chip
                              label
                              :key="t"
                              color="primary"
                              text-color="white"
                              class="mr-1 mt-1"
                          >
                            <span>{{ mod }}</span>
                          </v-chip>
                        </template>
                      </div>
                    </v-card>
                  </v-list-item-title>
                  <div>
                    Courage:
                    <v-progress-linear height="10"
                                       :value="horseModel.curCourage/2"></v-progress-linear>
                    Sport Skill:
                    <v-progress-linear height="10"
                                       :value="horseModel.curSportAbility/2"></v-progress-linear>

                    Accurate:
                    <v-progress-linear height="10"
                                       :value="horseModel.curAccurateAbility/2"></v-progress-linear>

                    Speed:
                    <v-progress-linear height="10"
                                       :value="horseModel.curSpeedAbility/2"></v-progress-linear>

                    Cooperation:
                    <v-progress-linear height="10"
                                       :value="horseModel.curCooperateAbility/2"></v-progress-linear>


                  </div>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-spacer/>
                <v-btn
                    outlined
                    rounded
                    text
                    @click="saveHorse"
                >
                  Get
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
              v-model="noHorseDialog"
          >
            <v-card
                class="mx-auto"
                outlined
            >
              <v-list-item>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    No Opportunity
                  </div>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-spacer/>
                <v-btn
                    outlined
                    rounded
                    text
                >
                  Purchase
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-tab-item>
        <v-tab-item>
          <v-card class="ml-4 mr-4 mt-4" elevation="0">
            <div class="d-flex pa-2 justify-space-between">
              <v-icon color="black">
                mdi-wallet-outline
              </v-icon>
              €9999
            </div>
            <div class="d-flex pa-2 justify-space-between">
              <v-icon color="black">
                mdi-alpha-c-circle
              </v-icon>
              3765
            </div>
          </v-card>

        </v-tab-item>
      </v-tabs>
    </v-row>
  </v-container>
</template>


<script>


import {getRandomFromRange, getRandomInt} from "../modules/randomUtils";
import {myHorseList} from "../modules/moduleIndex";

export default {
  name: "MyInfo",
  data() {
    return {
      tab: null,
      findHorseDialog: false,
      noHorseDialog: false,
      initChance: 5,
      items: [
        'Market', 'Find', 'My Wallet'
      ],
      horseModel: {
        avatar: "http://photocdn.sohu.com/20080818/Img258957504.jpg",
        name: "",
        pedigreeId: 0, //种族
        pedigree: "", //种族
        pedigreeCharacterIds: [], //特性列表
        pedigreeCharacterName: "小巧灵活", //特性名称
        skillIds: [], //技巧列表
        skillName: [], //技巧名称
        curCourage: 0,
        curSportAbility: 0,
        curAccurateAbility: 0,
        curSpeedAbility: 0,
        curCooperateAbility: 0,
      },
      horseArray: ['Carolina Marsh Tucky', 'Arabian Horse', 'Morgan Horse', 'Friesian Horse',
        'Gypsy horse', 'Marwari Horse', 'Orlov Trotter', 'Hackney Horse', 'Andalusian Horse', 'Irish Thoroughbred'],
      horseCharacter: ['Strong personality', 'Quiet', 'Stable personality'],
      horseSizeArray: ['Big Size', 'Medium Size', 'Small Size'],
      horseTempArray: ['Brave', 'Normal', 'cowardly'],
      horsesList: [
        {
          id: 1,
          name: "Eminy",
          avatar: "http://i2.itc.cn/20180829/36b3_51604eaf_5988_b9aa_4f22_b8d9c4c2299c_1.jpg",
          pedigreeId: 0, //种族
          pedigree: "Carolina Marsh Tucky", //种族
          pedigreeCharacterIds: [], //特性列表
          pedigreeCharacterName: ["Strong personality", "Medium Size", "Brave"], //特性名称
          skillIds: [], //技巧列表
          skillName: [], //技巧名称
          curCourage: 0,
          curSportAbility: 0,
          curAccurateAbility: 0,
          curSpeedAbility: 0,
          curCooperateAbility: 0,
        },
        {
          id: 2,
          name: "Amy",
          avatar: "https://img3.jiemian.com/101/original/20181023/154026091835642000_a640x364.jpg",
          pedigreeId: 0, //种族
          pedigree: "Morgan Horse", //种族
          pedigreeCharacterIds: [], //特性列表
          pedigreeCharacterName: ["Quiet", "Small Size", "Cowardly"], //特性名称
          skillIds: [], //技巧列表
          skillName: [], //技巧名称
          curCourage: 0,
          curSportAbility: 0,
          curAccurateAbility: 0,
          curSpeedAbility: 0,
          curCooperateAbility: 0,
        },
        {
          id: 3,
          name: "Linda",
          avatar: "https://ichef.bbci.co.uk/news/640/cpsprodpb/EA7F/production/_119713006_27999236-21fc-44c2-84a5-8be0eef78ceb.jpg",
          pedigreeId: 0, //种族
          pedigree: "Irish Thoroughbred", //种族
          pedigreeCharacterIds: [], //特性列表
          pedigreeCharacterName: ["Stable personality", "Big Size", "Normal"], //特性名称
          skillIds: [], //技巧列表
          skillName: [], //技巧名称
          curCourage: 0,
          curSportAbility: 0,
          curAccurateAbility: 0,
          curSpeedAbility: 0,
          curCooperateAbility: 0,
        },
      ]
    }
  },
  methods: {
    saveHorse() {
      if(!this.horseModel.name) {
        this.horseModel.name = "Happy"
      }
      myHorseList.push(this.horseModel)
      console.log(myHorseList)
      this.findHorseDialog = false
    },
    findHorse() {
      if (this.initChance > 0) {

        let pedigreeId = getRandomInt(9)

        console.log(pedigreeId)

        this.horseModel = {
          avatar: "http://photocdn.sohu.com/20080818/Img258957504.jpg",
          pedigreeId: pedigreeId, //种族
          pedigree: this.horseArray[pedigreeId], //种族
          pedigreeCharacterIds: [], //特性列表
          pedigreeCharacterName: this.horseCharacter[getRandomInt(3)] + ', ' + this.horseTempArray[
              getRandomInt(3)] + ', ' + this.horseSizeArray[
              getRandomInt(3)], //特性名称
          skillIds: [], //技巧列表
          skillName: [], //技巧名称
          curCourage: getRandomFromRange(80, 120),
          curSportAbility: getRandomFromRange(80, 120),
          curAccurateAbility: getRandomFromRange(80, 120),
          curSpeedAbility: getRandomFromRange(80, 120),
          curCooperateAbility: getRandomFromRange(80, 120),
        }
        this.findHorseDialog = this.initChance > 0
        this.initChance--
      } else {
        this.noHorseDialog = this.initChance === 0
      }
    },
  }
}
</script>

<style scoped>

</style>
