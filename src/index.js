import People from "./model/People"
import Student from "./model/Student"

const p = new People('oppnys', 123)

const peopleButton = document.createElement('button')
peopleButton.innerHTML = 'People button'
peopleButton.type = 'button'
peopleButton.onclick = p.eat.bind(p)
document.body.append(peopleButton)

const student = new Student('wang', 12, 'code12321')
const studentButton = document.createElement('button')
studentButton.innerHTML = 'Student button'
studentButton.type = 'button'
studentButton.onclick = student.study.bind(student)
document.body.append(studentButton)

student.getWeight()
