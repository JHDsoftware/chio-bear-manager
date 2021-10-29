import IKUtils from "innerken-js-utils";

export function beforeLoop(slot, horse) {
}

export function shouldPassSlot(slot, horse) {
}

export function afterLoop(slot, horse) {
}

export function lastSlotReached() {
}

const Horse = {
    hp: 0,
    stima: 0,
    baseProperty: {
        strength: 0,

    }
}

/*
* createNewHorse
*
*
* */

const horse = IKUtils.deepCopy(Horse)


const Looper = {
    map: [],
    loopCount: 0,
    totalTime: 0,
    currentPosition: 0,
    totalLength: () => {
        return map.length
    },
    start: () => {

    },
    moveForward: () => {
        this.currentPosition += 1
    },
    onLoop: () => {
        const currentPos = this.map[this.currentPosition]
        beforeLoop(currentPos)
        if (shouldPassSlot(currentPos)) {
            if (this.currentPosition < this.totalLength()) {
                this.moveForward()
            } else {

            }
        } else {

        }
        afterLoop(currentPos)

    }
}

function looper() {

}
