export class Product {
    name: string

    constructor(name: string) {
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
    create(name: string) {
        return new Product(name)
    }
}

const creator = new Creator()
const phoneProduct = creator.create('phone')
console.log(phoneProduct)
