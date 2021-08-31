export default class Goods {
    id: number
    name: string
    price: number
    description: string
    discount: number

    constructor(id: number, name: string, price: number, description: string, discount: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.discount = discount;
    }
}
