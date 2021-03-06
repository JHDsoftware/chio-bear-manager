//马的实体
import IKUtils from "innerken-js-utils";
import {getRandomInt} from "./randomUtils";

export let allInitialPoint = 100
export const myHorseList = []

export const Horse = {
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
    curScore: 0,
    inGameCourage: 0,
    inGameSportAbility: 0,
    buffs: []
}

//马的种族实体
export const Pedigree = {
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

export const gameStartedEvent = cNew(GameEvent)
export const gameEndedEvent = cNew(GameEvent)
const gameBeforeBlockEvent = cNew(GameEvent)
const gameAfterBlockEvent = cNew(GameEvent)

// // 特性
// const Character = {
//     id: 0,
//     name: null,
//     initBeforeStarted: null,
// }
//
// // 技能
// const Skill = {
//     id: 0,
//     name: null,
//     initBeforeStarted: null,
// }

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

const localGetRandomInt = getRandomInt

const PropertySimpleBuff = function (duration, modifier, revModifier) {
    return cNew(Buff, {
        id: 2,
        duration: duration,
        onApply: modifier,
        onTick: () => {
        },
        onRemove: revModifier,
    })
}

const LoopResult = {
    INTERRUPTED: 1,
    SUCCESS: 2,
    GREAT_SUCCESS: 4,
    FAILED: 8,
    GREAT_FAILED: 16,
}

export const Block = {
    id: 0,
    name: null,
    beforePass: null,
    afterPass: null,
    tryCount: 0,
}

export const EmptyBlock = cNew(Block, {
    id: 10,
    name: "empty",
    beforePass: function () {
        return LoopResult.SUCCESS
    },
    afterPass: function (h) {
        h.inGameCourage += 3
        h.inGameSportAbility += 5
    },
})

const BASIC_SPORT_ABILITY_CONSUMPTION = 15
const BASIC_COURAGE_CONSUMPTION = 10
export let Check = 0

// eslint-disable-next-line no-unused-vars
export const broadcastCheckAndPerformance = function (check, performance, greatPerf) {}

const barrierCheck = async function (h, score, probCallback, effectCallback) {
    h.check = "-"
    h.perform = "-"
    const prob = probCallback(h)
    h.check = (100 - prob).toFixed(2)
    await new Promise(r => setTimeout(r, 500));
    const performance = localGetRandomInt(100)
    await new Promise(r => setTimeout(r, 500));
    h.perform = parseInt(100 - performance)
    await new Promise(r => setTimeout(r, 500));
    const great = localGetRandomInt(100)



    const greatPerf = great < 20 ? 1 : 0

    const branch = (performance < prob ? 0 : 2) + (greatPerf)
    const selectedEff = [
        effectCallback.success,
        effectCallback.greatSuccess,
        effectCallback.failed,
        effectCallback.greatFailed,
    ][branch]

    const checkResult = [
        LoopResult.SUCCESS,
        LoopResult.GREAT_SUCCESS,
        LoopResult.FAILED,
        LoopResult.GREAT_FAILED,
    ][branch]

    selectedEff(h, score)

    h.inGameSportAbility -= BASIC_SPORT_ABILITY_CONSUMPTION
    h.inGameCourage -= BASIC_COURAGE_CONSUMPTION
    let checkResultString = ""
    switch (checkResult) {
        case LoopResult.SUCCESS:
            checkResultString = "Success!"
            break;
        case LoopResult.GREAT_SUCCESS:
            checkResultString = "Huge Success!"
            break;
        case LoopResult.FAILED:
            checkResultString = "Failed"
            break;
        case LoopResult.GREAT_FAILED:
            checkResultString = "Big Failed!"
            break;
    }
    h.perform = checkResultString
    h.check = ""
    await new Promise(r => setTimeout(r, 500));
    return checkResult
}

export const VerticalBarrier = cNew(Block, {
    id: 11,
    name: "vertical",
    beforePass: async function (horse, block, loopCount, score) {
        return await barrierCheck(horse, score,
            h => 0.5 * (
                h.curCourage +
                h.curSportAbility +
                h.curSpeedAbility +
                h.curCooperateAbility +
                h.curAccurateAbility
            ) / 4,
            {
                success: () => {
                },
                greatSuccess: h => {
                    PropertySimpleBuff(6,
                        h => h.curSpeedAbility *= 1.2,
                        h => h.curSpeedAbility /= 1.2,
                    ).applyToHorse(h)
                },
                failed: h => {
                    PropertySimpleBuff(6,
                        h => h.curSpeedAbility *= 0.8,
                        h => h.curSpeedAbility /= 0.8,
                    ).applyToHorse(h)

                    h.curScore -= 1
                },
                greatFailed: h => {
                    PropertySimpleBuff(6,
                        h => h.curSpeedAbility *= 0.8,
                        h => h.curSpeedAbility /= 0.8,
                    ).applyToHorse(h)

                    h.inGameSportAbility -= BASIC_SPORT_ABILITY_CONSUMPTION * 0.5
                    h.inGameCourage -= BASIC_COURAGE_CONSUMPTION * 0.5

                    h.curScore -= 1
                },
            },
        )
    }
})

export const LargeVerticalBarrier = cNew(Block, {
    id: 12,
    name: "large vertical",
    beforePass: async function (horse, block, loopCount, score) {
        return await barrierCheck(horse, score,
            h => 0.5 * (
                h.curCourage +
                h.curSportAbility +
                h.curSpeedAbility +
                h.curCooperateAbility +
                h.curAccurateAbility
            ) / 6,
            {
                success: () => {
                },
                greatSuccess: h => {
                    PropertySimpleBuff(8,
                        h => h.curSpeedAbility *= 1.2,
                        h => h.curSpeedAbility /= 1.2,
                    ).applyToHorse(h)
                },
                failed: h => {
                    PropertySimpleBuff(8,
                        h => h.curSpeedAbility *= 0.8,
                        h => h.curSpeedAbility /= 0.8,
                    ).applyToHorse(h)

                    h.curScore -= 1
                },
                greatFailed: h => {
                    PropertySimpleBuff(8,
                        h => h.curSpeedAbility *= 0.8,
                        h => h.curSpeedAbility /= 0.8,
                    ).applyToHorse(h)

                    h.inGameSportAbility -= BASIC_SPORT_ABILITY_CONSUMPTION * 0.5
                    h.inGameCourage -= BASIC_COURAGE_CONSUMPTION * 0.5

                    h.curScore -= 2
                },
            },
        )
    }
})

export const HealVertical = cNew(Block, {
    id: 13,
    name: "heal vertical",
    beforePass: async function (horse, block, loopCount, score) {
        return await barrierCheck(horse, score,
            h => 0.5 * (
                h.curCourage +
                h.curAccurateAbility
            ) / 2,
            {
                success: (h) => {
                    PropertySimpleBuff(2,
                        h => h.curSpeedAbility *= 1.2,
                        h => h.curSpeedAbility /= 1.2,
                    ).applyToHorse(h)
                },
                greatSuccess: h => {
                    PropertySimpleBuff(3,
                        h => h.curSpeedAbility *= 1.2,
                        h => h.curSpeedAbility /= 1.2,
                    ).applyToHorse(h)
                },
                failed: h => {
                    PropertySimpleBuff(2,
                        h => h.curSpeedAbility *= 0.8,
                        h => h.curSpeedAbility /= 0.8,
                    ).applyToHorse(h)

                    h.curScore -= 1
                },
                greatFailed: h => {
                    h.curScore -= 4
                },
            },
        )
    }
})

export const blockLoop = async function (horse, block, loopCount, score) {
    gameBeforeBlockEvent.callbacks.forEach(it => {
        it && it(horse, block, loopCount)
    })

    horse.buffs.filter(it => it.elapsed >= it.duration).forEach(it => {
        it.removeFromHorse(horse)
    })

    horse.buffs = horse.buffs.filter(it => it.elapsed < it.duration)
    horse.buffs.forEach(it => {
        it.onTick(horse)
        it.elapsed += 1
    })

    let beforeResult = LoopResult.SUCCESS
    if (block.beforePass) {
        beforeResult = await block.beforePass(horse, block, loopCount, score)

        if (beforeResult < 8) {
            block.afterPass && block.afterPass(horse, block, loopCount, score);
        }
    }

    gameAfterBlockEvent.callbacks.forEach(it => {
        it && it(horse, block, loopCount)
    })

    return beforeResult
}
