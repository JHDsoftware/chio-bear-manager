export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
