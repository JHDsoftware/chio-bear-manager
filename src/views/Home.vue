<template>
    <v-app id="inspire">
      <v-app-bar
              absolute
              app
              src="../assets/CHIO_bgpic.jpeg"
              dark
              height='364'
      >

      </v-app-bar>
      <v-main>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <div class="text-center">
                  <v-icon small color="primary">mdi-clipboard-text-outline</v-icon>
                  <span>Horses List</span>
                </div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-sheet>
          <template v-for="(item, index) in categoryList">
            <v-row justify="center" :key="index" class="pt-4" @click="getDishesByOrderId(item)">
              <div class="">{{ item }}</div>
            </v-row>
          </template>
        </v-sheet>
      </v-main>
      <v-bottom-navigation
              :value="value"
              color="primary"
      >
        <v-btn>
          <span>Horses</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
          <span>Games</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
          <span>Training</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
        <v-btn>
          <span>My</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-app>

</template>

<script>

export default {
  name: 'Home',
  data: function () {
    return {
      horselist: [
        {
          
        },{

        },{

        },{

        }
      ],
    }
  },
  components: {

  }
}
</script>
