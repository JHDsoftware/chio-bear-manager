//马的实体
const Horse = {
    name: "",
    pedigreeId: 0, //种族
    pedigree: "", //种族
    pedigreeCharacterIds: [], //特性列表
    pedigreeCharacterName: [], //特性名称
    skillIds: [], //技巧列表
    skillName: [], //技巧名称
    maxCourage: 0,
    minCourage: 0,
    curCourage: 0,
    curSportAbility: 0,
    curAccurateAbility: 0,
    curSpeedAbility: 0,
    curCooperateAbility: 0,
}

//马的种族实体
const Pedigree = {
    id: 0,
    name: 0,
    pedigreeCharacterIds: [], //特性列表
    pedigreeCharacterName: [], //特性名称
    skillIds: [], //技巧列表
    skillName: [], //技巧名称
    maxCourage: 0,
    minCourage: 0,
    maxSportAbility: 0,
    minSportAbility: 0,
    maxAccurateAbility: 0,
    minAccurateAbility: 0,
    maxSpeedAbility: 0,
    minSpeedAbility: 0,
    maxCooperateAbility: 0,
    minCooperateAbility: 0,
}

const PedigreeCharacter = {
    id: 0,
    name: ""
}
