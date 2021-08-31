import App from "./App";
import Cart from "./Cart";

export default class ShoppingCart {
    app: App
    el: Element
    cart: Cart

    constructor(app: App) {
        this.app = app
        this.el = document.createElement('div')
        this.el.setAttribute('style', "padding: 30px 0;border-bottom: 1px solid #333")
        this.cart = Cart.getInstance()
        this.init()
    }

    init() {
        this.initBtn()
        this.render()
    }

    initBtn() {
        const button = document.createElement('button')
        button.innerText = '购物车'
        button.addEventListener('click', () => {
            this.showCart()
        })
        this.el.append(button)
    }

    showCart() {
        alert(this.cart.getList())
    }

    private render() {
        this.app.el.append(this.el)
    }

}
