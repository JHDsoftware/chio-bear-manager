<template>
    <v-container fluid>
        <div class="d-flex justify-space-between">
            <h3>Talent Point: {{allInitialPoint}}</h3>
        </div>
        <v-list>
            <v-list-group
                    v-for="(item, i) in horseList"
                    :key= i
                    no-action
            >
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.pedigree"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
                    </v-list-item-content>
                </template>
                <div>
                    <div class="d-flex justify-space-between">
                        <span style="width: 80%">Courage:
                        <v-progress-linear height="10"
                                           :value="item.curCourage"></v-progress-linear></span>
                        <span><v-btn icon
                                     @click="updateHorse(i, 0)"><v-icon color="grey lighten-1">mdi-plus-circle
                            -outline</v-icon></v-btn></span>
                    </div>

                    <div class="d-flex justify-space-between">
                        <span style="width: 80%">Sport Skill:
                        <v-progress-linear height="10"
                                           :value="item.curSportAbility"></v-progress-linear></span>
                        <span><v-btn icon @click="updateHorse(i, 1)"><v-icon color="grey lighten-1">mdi-plus-circle
                            -outline</v-icon></v-btn></span>
                    </div>
                    <div class="d-flex justify-space-between">
                        <span style="width: 80%">Accurate:
                        <v-progress-linear height="10"
                                           :value="item.curAccurateAbility"></v-progress-linear></span>
                        <span><v-btn icon @click="updateHorse(i, 2)"><v-icon color="grey lighten-1">mdi-plus-circle
                            -outline</v-icon></v-btn></span>
                    </div>
                    <div class="d-flex justify-space-between">
                        <span style="width: 80%">Speed:
                        <v-progress-linear height="10"
                                           :value="item.curSpeedAbility"></v-progress-linear></span>
                        <span><v-btn icon @click="updateHorse(i, 3)"><v-icon color="grey lighten-1">mdi-plus-circle
                            -outline</v-icon></v-btn></span>
                    </div>
                    <div class="d-flex justify-space-between">
                        <span style="width: 80%">Cooperation:
                        <v-progress-linear height="10"
                                           :value="item.curCooperateAbility"></v-progress-linear></span>
                        <span><v-btn icon @click="updateHorse(i, 4)"><v-icon color="grey lighten-1">mdi-plus-circle
                            -outline</v-icon></v-btn></span>
                    </div>
                </div>

            </v-list-group>
        </v-list>
    </v-container>
</template>

<script>
    import {allInitialPoint, myHorseList} from "../modules/moduleIndex";

    export default {
        name: "Training",

        data() {
            return {
                allInitialPoint
            }
        },

        computed: {
            horseList() {
                return myHorseList
            },

            // initialTP() {
            //     return this.allInitialPoint
            // }
        },

        methods: {
            updateHorse(index, skillIdx) {
                if(this.allInitialPoint > 0){
                    switch (skillIdx) {
                        case 0: myHorseList[index].curCourage ++
                            break
                        case 1: myHorseList[index].curSportAbility ++
                            break
                        case 2: myHorseList[index].curAccurateAbility ++
                            break
                        case 3: myHorseList[index].curSpeedAbility ++
                            break
                        case 4: myHorseList[index].curCooperateAbility ++
                            break

                    }
                    this.allInitialPoint --
                }

            }

        }
    }
</script>

<style scoped>

</style>
