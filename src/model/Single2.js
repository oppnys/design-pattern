export class Single {
    say() {
        console.log(`hi...`)
    }
}

Single.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new Single()
        }
        return instance
    }
})()

const singleInstance1 = Single.getInstance()
const singleInstance2 = Single.getInstance()
const singleInstance3 = new Single()

console.log(singleInstance1)
console.log(`singleInstance1 === singleInstance2: ${singleInstance1 === singleInstance2}`)
console.log(`singleInstance1 === singleInstance3: ${singleInstance1 === singleInstance3}`)
