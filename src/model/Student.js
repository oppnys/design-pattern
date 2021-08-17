import People from "./People";


export default class Student extends People {
    constructor(name, age, number) {
        super(name, age)
        this.number = number
        console.log('Student constructor')
    }

    study() {
        console.log(`${this.name} is study`)
    }
}