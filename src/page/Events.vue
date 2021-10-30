<template>
    <v-container>
      <h1>Event</h1>
      <v-divider></v-divider>
      <div class="pa-2">
        <v-card
            class="mx-auto mb-4"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                JUMPING
              </v-list-item-title>
              <v-list-item-subtitle>The international show jumping elite has already been meeting up here for many years striving to ride to victory in the coveted competitions of the CHIO Aachen. </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
                tile
                size="80"
                color="grey"
            >
              <v-img src="../assets/jumping.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
<v-card
            class="mx-auto mb-4"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                JUMPING
              </v-list-item-title>
              <v-list-item-subtitle>The international show jumping elite has already been meeting up here for many years striving to ride to victory in the coveted competitions of the CHIO Aachen. </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
                tile
                size="80"
                color="grey"
            >
              <v-img src="../assets/jumping.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
<v-card
            class="mx-auto mb-4"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                JUMPING
              </v-list-item-title>
              <v-list-item-subtitle>The international show jumping elite has already been meeting up here for many years striving to ride to victory in the coveted competitions of the CHIO Aachen. </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
                tile
                size="80"
                color="grey"
            >
              <v-img src="../assets/jumping.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>

      </div>

        <v-card
                class="mx-auto mb-4"
                max-width="344"

                outlined
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                        PVE
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                        Dressage
                    </v-list-item-title>
                    <v-list-item-subtitle>An extremely high amount of concentration is demanded from both the riders and their horses</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                >
                    <v-img src="../assets/dressage.png"></v-img>
                </v-list-item-avatar>
            </v-list-item>
        </v-card>

        <v-card
                class="mx-auto  mb-4"
                max-width="344"
                outlined
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                        PVE
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                        DRIVING
                    </v-list-item-title>
                    <v-list-item-subtitle>The teams have to be driven round, over and through the obstacles and reach the finish line clear and as fast as possible.</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                >
                    <v-img src="../assets/driving.png"></v-img>
                </v-list-item-avatar>
            </v-list-item>

        </v-card>
        <v-card
                class="mx-auto  mb-4"
                max-width="344"
                outlined
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                        PVE
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                        EVENTING
                    </v-list-item-title>
                    <v-list-item-subtitle>the horses and riders have to face manifold challenges to complete different maps, such as jungle, snow, mountain, etc.</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                >
                    <v-img src="../assets/eventing.png"></v-img>
                </v-list-item-avatar>
            </v-list-item>
        </v-card>
    </v-container>
</template>

<script>
export default {
  name: "Events",

    methods: {
      beginGame() {
          this.$router.push({
              path: '/GameRender',
              query: {
                  data: this.horse
              }
          })
      }
    }
}
</script>

<style scoped>

</style>
