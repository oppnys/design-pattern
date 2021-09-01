import Goods from "./Goods";
import {log} from "./Utils";

export default class Cart {
    private static instance: Cart;
    private goodsList: Array<Goods> = []

    private constructor() {
    }

    public static getInstance() {
        if (this.instance === null || this.instance === undefined) {
            this.instance = new Cart()
        }
        return this.instance as Cart
    }

    @log('add')
    add(goods: Goods) {
        this.goodsList.push(goods)
    }

    @log('remove')
    remove(id: number) {
        this.goodsList = this.goodsList.filter((goods) => {
            if (goods.id === id) {
                return false
            }
            return true
        })
    }

    getList(): string {
        return this.goodsList.map((goods) => {
            return goods.name
        }).join(',')
    }
}
