import {getRandomInt} from "./randomUtils";

export const randomBlockIndexList = function (outputSize, nonEmptySize, from, step, rndMax) {
    const result = []

    let varProb = from
    for (let i = 0; i < outputSize; i++) {
        const curHit = getRandomInt(rndMax)
        const forceNotGen = result[result.length - 1] != 0 || result[result.length - 2] != 0 || i < 2
        if (curHit < varProb && !forceNotGen) {
            const chosenIndex = getRandomInt(nonEmptySize) + 1
            result.push(chosenIndex)
            varProb = from
        } else {
            result.push(0)
            varProb += step
        }
    }

    return result
};