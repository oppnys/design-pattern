class Person {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

const p = new Person('dell')

console.log(p.getName())