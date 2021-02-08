function random(maxNum, ratio) {
    let num = 0
    while(num <= 0 || num > maxNum) {
        num = parseInt(ratio * Math.random())
    }
    return num
}

module.exports = function roll(ratio) {
    const res = []
    while(res.length < 6) {
        const r = random(33, ratio)
        if (res.indexOf(r) == -1) {
            res.push(r)
        }
    }
    res.sort((a, b) => a - b)
    const s = random(16, ratio)
    res.push(s)
    return res.map(n => n.toString().padStart(2, "0"))
}