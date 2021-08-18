export class Product {
    name: String

    constructor(name: String) {
        this.name = name
    }

    init() {
    }

    fn() {
    }

    fn2() {
    }
}

export class Creator {
    create(name: String) {
        return new Product(name)
    }
}

const creator = new Creator()
const phoneProduct = creator.create('phone')
console.log(phoneProduct)
