export function beforeLoop(slot, horse) {
}

export function shouldPassSlot(slot, horse) {
}

export function afterLoop(slot, horse) {
}

export function lastSlotReached() {
}

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
            }else{

            }
        } else {

        }
        afterLoop(currentPos)

    }
}

function looper() {

}
