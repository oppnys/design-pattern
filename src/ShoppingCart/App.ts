import ShoppingCart from "./ShoppingCart";
import GoodsList from "./GoodsList";

export default class App {
    el: Element

    constructor(el: string) {
        this.el = document.getElementById(el) as Element
        this.init()
    }

    init() {
        new ShoppingCart(this)
        new GoodsList(this)
    }
}
