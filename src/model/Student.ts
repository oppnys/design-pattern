import People from "./People";


export default class Student extends People {
    number: Number
    constructor(name: String, age: Number, number: Number) {
        super(name, age)
        this.number = number
        console.log('Student constructor')
    }

    study() {
        console.log(`${this.name} is study`)
    }
}
