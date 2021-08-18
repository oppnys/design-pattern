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


const p = new People('oppnys', 123)

const peopleButton = document.createElement('button')
peopleButton.innerHTML = 'People button'
peopleButton.type = 'button'
peopleButton.onclick = p.eat.bind(p)
document.body.append(peopleButton)

const student = new Student('wang', 12,123)
const studentButton = document.createElement('button')
studentButton.innerHTML = 'Student button'
studentButton.type = 'button'
studentButton.onclick = student.study.bind(student)
document.body.append(studentButton)
student.getWeight()
