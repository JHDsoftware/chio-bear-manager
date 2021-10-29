//马的实体
import IKUtils from "innerken-js-utils";
import {getRandomInt} from "./randomUtils";

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

export const PedigreeCharacter = {
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

export const gameStartedEvent = cNew(GameEvent)
export const gameEndedEvent = cNew(GameEvent)
const gameBeforeBlockEvent = cNew(GameEvent)
const gameAfterBlockEvent = cNew(GameEvent)

// 特性
export const Character = {
    id: 0,
    name: null,
    initBeforeStarted: null,
}

// 技能
export const Skill = {
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
        h.curCourage += 2
        h.curSportAbility += 2
    },
})

const BASIC_SPORT_ABILITY_CONSUMPTION = 15
const BASIC_COURAGE_CONSUMPTION = 15

const barrierCheck = function (h, score, probCallback, effectCallback) {
    const prob = probCallback(h)

    const performance = localGetRandomInt(100)
    const great = localGetRandomInt(100)
    const branch = (performance < prob ? 0 : 2) + (great < 20 ? 1 : 0)
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

    h.curSportAbility -= BASIC_SPORT_ABILITY_CONSUMPTION
    h.curCourage -= BASIC_COURAGE_CONSUMPTION

    return checkResult
}

export const VerticalBarrier = cNew(Block, {
    id: 11,
    name: "vertical",
    beforePass: function (horse, block, loopCount, score) {
        return barrierCheck(horse, score,
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
                    PropertySimpleBuff(2,
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
                    PropertySimpleBuff(2,
                        h => h.curSpeedAbility *= 0.8,
                        h => h.curSpeedAbility /= 0.8,
                    ).applyToHorse(h)

                    h.curSportAbility -= BASIC_SPORT_ABILITY_CONSUMPTION * 0.5
                    h.curCourage -= BASIC_COURAGE_CONSUMPTION * 0.5

                    h.curScore -= 1
                },
            },
        )
    }
})

const LargeVerticalBarrier = cNew(Block, {
    id: 11,
    name: "large vertical",
    beforePass: function (horse, block, loopCount, score) {
        return barrierCheck(horse, score,
            h => 0.5 * (
                h.curCourage +
                h.curSportAbility +
                h.curSpeedAbility +
                h.curCooperateAbility +
                h.curAccurateAbility
            ) / 8,
            {
                success: () => {
                },
                greatSuccess: h => {
                    PropertySimpleBuff(2,
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
                    PropertySimpleBuff(2,
                        h => h.curSpeedAbility *= 0.8,
                        h => h.curSpeedAbility /= 0.8,
                    ).applyToHorse(h)

                    h.curSportAbility -= BASIC_SPORT_ABILITY_CONSUMPTION * 0.5
                    h.curCourage -= BASIC_COURAGE_CONSUMPTION * 0.5

                    h.curScore -= 2
                },
            },
        )
    }
})

const HealVertical = cNew(Block, {
    id: 11,
    name: "heal vertical",
    beforePass: function (horse, block, loopCount, score) {
        return barrierCheck(horse, score,
            h => 0.5 * (
                h.curCourage +
                h.curAccurateAbility
            ) / 3,
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

export const blockLoop = function (horse, block, loopCount, score) {
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
        beforeResult = block.beforePass(horse, block, loopCount, score)

        if (beforeResult < 8) {
            block.afterPass && block.afterPass(horse, block, loopCount, score);
        }
    }

    gameAfterBlockEvent.callbacks.forEach(it => {
        it && it(horse, block, loopCount)
    })

    return beforeResult
};
