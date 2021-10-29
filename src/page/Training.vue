<template>
    <v-container fluid>
        <v-row>
            <v-col
                    v-for="(item, n) in horsesList"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
            >
                <v-card >
                    <v-img height="88" :src=item.avatar></v-img>
                    <v-spacer/>
                    <v-radio
                            :label=item.name
                            :value="1"
                    ></v-radio>
                        <v-spacer/>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: "Training",

        data() {
            return {
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
        }
    }
</script>

<style scoped>

</style>
