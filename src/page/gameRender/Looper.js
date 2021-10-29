import {Block, blockLoop, Pedigree} from "@/modules/moduleIndex";
import IKUtils from "innerken-js-utils";

const Looper = {
    map: [].fill(Block, 0, 40),
    loopCount: 0,
    totalTime: 0,
    currentPosition: 0,
    totalScore: 0,
    totalLength: () => {
        return this.map.length
    },
    shouldEnd: () => {
        return this.loopCount > 50
    },
    start: () => {
        setTimeout(this.onLoop, 1000)
    },
    holdPosition: () => {
    },
    moveForward: () => {
        this.currentPosition += 1
    },
    onLoop: () => {
        const currentPos = this.map[this.currentPosition]
        blockLoop(IKUtils.deepCopy(Pedigree), currentPos, this.loopCount, this.totalScore)
        this.loopCount++
        this.moveForward()
        if (!this.shouldEnd()) {
            setTimeout(this.onLoop, 1000)
        }
    }
}

function looper() {

}
