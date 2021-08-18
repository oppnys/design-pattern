export default class People {
    name: String
    age: Number
    private weight = '70Kg'
    constructor(name:String, age:Number) {
        this.name = name
        this.age = age
        console.log('People constructor', this.name)
    }

    eat() {
        console.log(`${this.name} eat something`)
    }

    getWeight() {
        console.log(`${this.name} is ${this.weight}`)
    }

    speak() {
        console.log(`my name is ${this.name} age ${this.age}`)
    }
}
