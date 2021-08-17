export default class People {
    constructor(name, age) {
        this.name = name
        this.age = age
        console.log('People constructor', this.name)
    }

    eat() {
        console.log(`${this.name} eat something`)
    }

    speak() {
        console.log(`my name is ${this.name} age ${this.age}`)
    }
}
