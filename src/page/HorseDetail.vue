<template>
  <v-container>
    <v-app-bar
        app
        dark
        color="blue">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-bold">
          {{ horse.name }} : CA{{horse.id}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="">CHIO Aachen CAMPUS</span>
    </v-app-bar>

  <div>
    <v-container>

      <v-img :src="horse.avatar" height="200px"></v-img>

      <div class="d-flex justify-space-between" style="margin-top: 10px">
        <v-card-actions class="font-weight-bold">History</v-card-actions>
        <v-btn @click="show=!show" icon>
          <v-icon >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </div>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">
              {{horse.name}}'History
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
                  <div><strong>{{item.historyTime}}</strong></div>
                  <div>{{item.historyDesc}}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </div>
      </v-expand-transition>



<!--      <v-list>-->
<!--        <v-list-item>-->
<!--          <v-list-item-content >Horse Name: {{horse.name}}</v-list-item-content>-->
<!--          <v-list-item-content>Horse ID: {{horse.ID}}</v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->

      <v-list class="font-weight-bold">
        <v-list-item style="padding-left: 8px">
          <v-list-item-content>Courage:</v-list-item-content>
          <v-list-item-content>{{ horse.curCourage }}</v-list-item-content>
          </v-list-item>

        <v-list-item style="padding-left: 8px">
        <v-list-item-content>SportAbility:</v-list-item-content>
        <v-list-item-content>{{horse.curSportAbility}}</v-list-item-content>
        </v-list-item>
        <v-list-item style="padding-left: 8px">
          <v-list-item-content>AccurateAbility:</v-list-item-content>
          <v-list-item-content>{{horse.curCourage}}</v-list-item-content>
        </v-list-item>
        <v-list-item style="padding-left: 8px">
          <v-list-item-content>SpeedAbility:</v-list-item-content>
          <v-list-item-content>{{horse.curSpeedAbility}}</v-list-item-content>
        </v-list-item>
        <v-list-item style="padding-left: 8px">
          <v-list-item-content>Courage:</v-list-item-content>
          <v-list-item-content>{{horse.curCooperateAbility}}</v-list-item-content>
        </v-list-item>


      </v-list>



    </v-container>


  </div>
  </v-container>
</template>

<script>
export default {
  name: "HorseDetail.vue",
  data() {
    return {
      show: false,
      horse: {
        // background:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLo44E49YbMLPr5JMx8OVKv5UKheHz1FGlg&usqp=CAU"
      },
      historyBackgroud : [
          {
            id: 1,
            historyList: [
              {historyTime: "2021-10-03",
                historyDesc: "He wins the game throught ..sss......",
              },{historyTime: "2021-10-03",
                historyDesc: "He wins the game throught ..sss......",
              },{historyTime: "2021-10-03",
                historyDesc: "He wins the game throught ..sss......",
              },{historyTime: "2021-10-03",
                historyDesc: "He wins the game throught ..sss......",
              },{historyTime: "2021-10-03",
                historyDesc: "He wins the game throught ..sss......",
              },
            ]
        },
        {
          id: 2,
          historyList: [
            {historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },{historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },{historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },{historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },
              ]
        },{
          id: 3,
          historyList: [
            {historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },{historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },{historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },{historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },
          ]
        },{
          id: 4,
          historyList: [
            {historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },{historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },{historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },{historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },
          ]
        },{
          id: 5,
          historyList: [
            {historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },{historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },{historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },{historyTime: "2021-10-03",
              historyDesc: "He wins the game throught ..sss......"
            },
          ]
        }

      ],

    }
  },
  created() {
    const _data = this.$route.query.data;

    this.horse = Object.assign(this.horse,_data)
  },
  computed: {
    historyList(){
      return this.historyBackgroud.find(_ => _.id === this.horse.id).historyList
    }
  },
  methods:{
    getQuery(){

    }
  }
}
</script>

<style scoped>

</style>