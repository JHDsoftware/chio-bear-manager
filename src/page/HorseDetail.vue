<template>
  <!--  <v-container>-->
  <!--    <v-app-bar-->
  <!--        app-->
  <!--        dark-->
  <!--        color="blue">-->
  <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
  <!--      <v-toolbar-title>-->
  <!--        <span class="font-weight-bold">-->
  <!--          {{ horse.name }} : CA{{horse.id}}</span>-->
  <!--      </v-toolbar-title>-->
  <!--      <v-spacer></v-spacer>-->
  <!--      <span class="">CHIO Aachen CAMPUS</span>-->
  <!--    </v-app-bar>-->

  <div>
    <v-container>

      <v-img src="https://www.chioaachen.de/wp-content/uploads/2021/06/MicrosoftTeams-image-1-1.jpg"
             height="180px">
      </v-img>

      <div class="d-flex justify-space-between" style="margin-top: 10px">
        <v-card-actions class="font-weight-bold">History</v-card-actions>
        <!--        <v-btn @click="show=!show" icon>-->
        <!--          <v-icon >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>-->
        <!--        </v-btn>-->
      </div>

      <v-expand-transition>
        <div v-show="show">
          <v-img :src="horse.avatar">
            <v-card style="opacity: 0.9; height: 100%">
              <v-divider></v-divider>

              <div style="margin-left: 48px; margin-top: 20px; width: 150px">

                <div><span >Name:</span> {{horse.pedigree}}</div>
                <span> </span>
                <div>ID: {{horse.pedigreeId}}</div>
              </div>

              <div style="margin-top: 20px;" class="align-center">

                <span style="margin-left: 48px; width: 150px">Courage:</span>
                <div style="margin-left:48px; width: 80%">
                  <v-progress-linear
                      style="margin-right: 10px"
                      height="10px"
                      color="yellow"
                      v-model="horse.curCourage"/>
                </div>

                <span style="margin-left: 48px; width: 150px">SpeedAbility:</span>
                <div style="margin-left:48px; width: 80%">
                  <v-progress-linear
                      style="margin-right: 10px"
                      height="10px"
                      color="blue"
                      v-model="horse.curSpeedAbility"/>
                </div>


                <span style="margin-left: 48px; width: 150px">SportAbility:</span>
                <div style="margin-left:48px; width: 80%">
                  <v-progress-linear
                      style="margin-right: 10px"
                      height="10px"
                      color="red"
                      v-model="horse.curSportAbility"/>
                </div>


                <span style="margin-left: 48px; width: 150px">CooperateAbility:</span>
                <div style="margin-left:48px; width: 80%">
                  <v-progress-linear
                      style="margin-right: 10px"
                      height="10px"
                      color="green"
                      v-model="horse.curCooperateAbility"/>
                </div>

              </div>


              <v-card-text>
                <div class="font-weight-bold ml-8 mb-2">
                  {{ horse.name }}'History
                </div>

                <v-timeline
                    align-top
                    dense>
                  <v-timeline-item
                      v-for="(item,index) in historyList"
                      :key='"his"+ index'
                      small
                  >
                    <div>
                      <div><strong>{{ item.historyTime }}</strong></div>
                      <div>{{ item.historyDesc }}</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-img>
        </div>

      </v-expand-transition>


      <!--      <v-list>-->
      <!--        <v-list-item>-->
      <!--          <v-list-item-content >Horse Name: {{horse.name}}</v-list-item-content>-->
      <!--          <v-list-item-content>Horse ID: {{horse.ID}}</v-list-item-content>-->
      <!--        </v-list-item>-->
      <!--      </v-list>-->

    </v-container>


  </div>
  <!--  </v-container>-->
</template>

<script>
export default {
  name: "HorseDetail.vue",
  data() {
    return {
      show: true,
      horse: {
        // background:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLo44E49YbMLPr5JMx8OVKv5UKheHz1FGlg&usqp=CAU"
      },
      historyBackgroud: [
        {
          id: 1,
          historyList: [
            {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......",
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......",
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......",
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......",
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......",
            },
          ]
        },
        {
          id: 2,
          historyList: [
            {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            },
          ]
        }, {
          id: 3,
          historyList: [
            {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            },
          ]
        }, {
          id: 4,
          historyList: [
            {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            },
          ]
        }, {
          id: 5,
          historyList: [
            {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            }, {
              historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..Something happed......"
            },
          ]
        }

      ],

    }
  },
  created() {
    const _data = this.$route.query.data;
    console.log("HorseDetail _data", _data)
    this.horse = Object.assign(this.horse, _data)
  },
  computed: {
    historyList() {
      return this.historyBackgroud[1].historyList
    }
  },
  methods: {
    getQuery() {

    }
  }
}
</script>

<style scoped>
.horse-class {
  display: inline;
  padding-left: 8px;
  /*display: flex;*/
  justify-content: space-between;
  width: 450px;
}

.end-class {
  margin-right: 20px;
}

.card-class {
  opacity: 0.90;
  position: relative;
  top: 10%;
  left: 50px;
  width: 400px;
  height: 80%;
}

.process-class {
  height: 10px;
}

</style>