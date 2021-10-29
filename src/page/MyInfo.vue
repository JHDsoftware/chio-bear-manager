<template>
    <v-container fluid>
        <v-app-bar
                app
                dark
                color="blue">
            <v-toolbar-title>
                My
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <span>CHIO Aachen CAMPUS</span>
        </v-app-bar>
        <v-row>
            <v-card width="1000" height="200px" color="black">
                    <v-card-title class="white--text mt-8">
                        <v-avatar size="128">
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
                    <template v-for="(horse,index) in horsesList" >
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
                                            {{horse.pedigree}}
                                        </div>
                                        <v-list-item-title class="text-h5 mb-1">
                                            €100
                                        </v-list-item-title>
                                        <v-list-item-subtitle>{{horse.pedigreeCharacterName.join(',')
                                            }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-card-actions>
                                    <v-spacer/> <v-btn
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
                    <v-card @click="findHorse()">
                        <v-img
                                height="400px"
                                src="https://lh3.googleusercontent.com/proxy/I4HHlzq6oPz09_UkiZdxUPDXvZg9B2Iv3NQVBWN1ORclS2UK1tW6mMInWYPKqBhiq91LHGZJdKOji3ABr8ZgjarJLbsVAq6JIu_LmYrmrGby9TKx"
                        >
                            <v-chip class="text-overline mt-4 ml-4" color="black" dark>
                               My Opportunity: {{initChance}}
                            </v-chip>
                        </v-img>

                    </v-card>
                    <v-dialog
                            v-model="findHorseDialog"
                    >
                        <v-card
                                class="mx-auto"
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
                                        Horse
                                    </div>
                                    <v-list-item-title class="text-h5 mb-1">
                                        €100
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        Horse Horse
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-card-actions>
                                <v-spacer/> <v-btn
                                    outlined
                                    rounded
                                    text
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
                                <v-spacer/> <v-btn
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
                    <v-row justify="space-between">
                        <v-list>
                            <v-list-item >
                                <v-list-item-icon>
                                    <v-icon color="indigo">
                                        mdi-phone
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>余额</v-list-item-title>
                                <v-list-item-subtitle>€9999</v-list-item-subtitle>
                            </v-list-item>


                        </v-list>
                    </v-row>

                </v-tab-item>
            </v-tabs>
        </v-row>

    </v-container>
</template>


<script>



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
                horsesList: [
                    {
                        id: 1,
                        name: "Eminy",
                        avatar: "http://i2.itc.cn/20180829/36b3_51604eaf_5988_b9aa_4f22_b8d9c4c2299c_1.jpg",
                        pedigreeId: 0, //种族
                        pedigree: "冰岛马", //种族
                        pedigreeCharacterIds: [], //特性列表
                        pedigreeCharacterName: ["比较平庸","耐力好","比较温顺"], //特性名称
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
                        pedigree: "汉诺威马", //种族
                        pedigreeCharacterIds: [], //特性列表
                        pedigreeCharacterName: ["强壮温和"], //特性名称
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
                        pedigree: "阿拉伯马", //种族
                        pedigreeCharacterIds: [], //特性列表
                        pedigreeCharacterName: ["极为劣性","亢奋易冲动"], //特性名称
                        skillIds: [], //技巧列表
                        skillName: [], //技巧名称
                        curCourage: 0,
                        curSportAbility: 0,
                        curAccurateAbility: 0,
                        curSpeedAbility: 0,
                        curCooperateAbility: 0,
                    },
                    {
                        id: 4,
                        name: "Feya",
                        avatar: "http://photocdn.sohu.com/20080818/Img258957504.jpg",
                        pedigreeId: 0, //种族
                        pedigree: "帕索菲诺", //种族
                        pedigreeCharacterIds: [], //特性列表
                        pedigreeCharacterName: ["小巧灵活"], //特性名称
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

            findHorse () {
                if(this.initChance > 0){
                    this.findHorseDialog = this.initChance > 0
                    this.initChance --
                }else{
                    this.noHorseDialog = this.initChance === 0
                }
            },
        }
    }
</script>

<style scoped>

</style>
