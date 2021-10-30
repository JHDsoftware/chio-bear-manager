<template>
  <v-container class="pa-2">
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="$router.back()">
        <v-icon>
          mdi-arrow-left
        </v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>Horse Detail</v-app-bar-title>
    </v-app-bar>

    <div class="pa-2"
    >
      <horse-card :horse="horse"></horse-card>
    </div>
    <div class="font-weight-bold mb-2">
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
  </v-container>
</template>

<script>
import HorseCard from "@/components/HorseCard";

export default {
  name: "HorseDetail.vue",
  components: {HorseCard},
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
