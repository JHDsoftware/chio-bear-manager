<template>
    <v-container fluid>
<!--        <v-list>-->
<!--            <v-list-group-->
<!--                    v-for="(item, i) in horseList"-->
<!--                    :key= i-->
<!--                    v-model="item.active"-->
<!--                    :prepend-icon="item.action"-->
<!--                    no-action-->
<!--            >-->
<!--                <template v-slot:activator>-->
<!--                    <v-list-item-content>-->
<!--                        <v-list-item-title v-text="item.title"></v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                </template>-->

<!--                <v-list-item-->
<!--                        v-for="child in item.items"-->
<!--                        :key="child.title"-->
<!--                >-->
<!--                    <v-list-item-content>-->
<!--                        <v-list-item-title v-text="child.title"></v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                </v-list-item>-->
<!--            </v-list-group>-->
<!--        </v-list>-->

        <v-row>
            <v-col
                    v-for="(item, n) in horseList"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
            >
                <v-card >
                    <v-img height="88" :src=item.avatar></v-img>
                    <v-spacer/>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    import {myHorseList} from "../modules/moduleIndex";

    export default {
        name: "Training",

        data() {
            return {
            }
        },

        computed: {
            horseList() {
                return myHorseList
            }
        }
    }
</script>

<style scoped>

</style>
