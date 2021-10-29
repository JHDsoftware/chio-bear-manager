//马的实体
import IKUtils from "innerken-js-utils";

const Horse = {
    name: "",
    pedigreeId: 0, //种族
    pedigree: "", //种族
    pedigreeCharacterIds: [], //特性列表
    pedigreeCharacterName: [], //特性名称
    skillIds: [], //技巧列表
    skillName: [], //技巧名称
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

const cNew = function (proto, init = {}, dc = IKUtils.deepCopy) {
    return {
        ...(dc(proto)),
        ...init
    }
};

const GameEvent = {
    callbacks: [],
    registerEvent: function (callback) {
        this.callbacks.push(callback)
    },
    removeEvent: function (callback) {
        const ci = this.callbacks.indexOf(callback)
        this.callbacks = this.callbacks.filter((_, i) => i === ci)
    }
}

const gameStartedEvent = cNew(GameEvent)
const gameEndedEvent = cNew(GameEvent)
const gameBeforeBlockEvent = cNew(GameEvent)
const gameAfterBlockEvent = cNew(GameEvent)

// 特性
const Character = {
    id: 0,
    name: null,
    initBeforeStarted: null,
}

// 技能
const Skill = {
    id: 0,
    name: null,
    initBeforeStarted: null,
}

const Buff = {
    id: 0,
    name: null,
    duration: 0,
    elapsed: 0,
    onRemove: null,
    onTick: null,
    onApply: null,
    applyToHorse: function (h) {
        h.buffs.push(this)
        if (this.onApply) {
            this.onApply(h, this);
        }
    },
    removeFromHorse: function (h) {
        this.onRemove && this.onRemove(h, this)
    }
}

const HpRegenerationBuff = cNew(Buff, {
    id: 1,
    duration: 2,
    onApply: function (h) {
        h.hp += 1000
    },
    onTick: function (h) {
        h.hp += 100
    },
    onRemove: h => {
        h.hp -= 1000
    }
})

const Block = {
    id: 0,
    name: null,
    beforePass: null,
    afterPass: null,
    tryCount: 0,
}

const LoopResult = {
    SUCCESS: 1,
    GREAT_SUCCESS: 2,
    FAILED: 4,
    GREAT_FAILED: 8,
}

const blockLoop = function (horse, block, loopCount, score, blockPassTime) {
    gameBeforeBlockEvent.callbacks.forEach(it => {
        it && it(horse, block, loopCount)
    })

    horse.buffs.filter(it => it.elapsed >= it.duration).forEach(it => {
        it.removeFromHorse(horse)
    })

    horse.buffs = horse.buffs.filter(it => it.elapsed < it.duration)
    horse.buffs.forEach(it => {
        it.onTick(horse)
        it.elapsed += blockPassTime
    })

    let beforeResult = LoopResult.SUCCESS
    if (block.beforePass) {
        beforeResult = block.beforePass(horse, block, loopCount, score)

        if (beforeResult < 4) {
            block.afterPass && block.afterPass(horse, block, loopCount, score);
        }
    }

    gameAfterBlockEvent.callbacks.forEach(it => {
        it && it(horse, block, loopCount)
    })

    return beforeResult
};
