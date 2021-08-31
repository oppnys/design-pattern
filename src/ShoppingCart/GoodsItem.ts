import Goods from "./Goods";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import StateMachine from "javascript-state-machine"

class GoodsItem {
    el: Element
    goods: Goods
    goodsList: GoodsList
    cart: Cart

    constructor(goods: Goods, goodsList: GoodsList) {
        this.el = document.createElement('li')
        this.goods = goods
        this.goodsList = goodsList
        this.cart = Cart.getInstance()
        this.init()
    }

    init() {
        this.initContent()
        this.initButton()
        this.initSplitLine()
        this.render()
    }

    initContent() {
        const nameEl = document.createElement('p')
        nameEl.innerText = `名称： ${this.goods.name}`
        this.el.append(nameEl)
        const priceEl = document.createElement('p')
        priceEl.innerText = `价格：${this.goods.price} 元`
        this.el.append(priceEl)
    }

    initButton() {
        const btn = document.createElement('button')
        // @ts-ignore
        const fsm = new StateMachine({
            init: '加入购物车',
            transitions: [
                {name: 'addToCart', from: '加入购物车', to: '从购物车删除'},
                {name: 'removeFromCart', from: '从购物车删除', to: '加入购物车'},
            ],
            methods: {
                onAddToCart: () => {
                    this.addCartHandle()
                    updateText()
                },
                onRemoveFromCart: () => {
                    this.removeCartHandle()
                    updateText()
                }
            }
        })

        function updateText() {
            btn.innerText = fsm.state
        }

        btn.addEventListener('click', (e) => {
            if (fsm.is('加入购物车')) {
                fsm.addToCart()
            } else {
                fsm.removeFromCart()
            }
        })
        updateText()
        this.el.append(btn)
    }

    initSplitLine() {
        const lineEl = document.createElement('hr')
        this.el.append(lineEl)
    }

    addCartHandle() {
        this.cart.add(this.goods)
    }

    removeCartHandle() {
        this.cart.remove(this.goods.id)
    }

    render() {
        this.goodsList.el.append(this.el)
    }
}

function createDiscount(goods: Goods): Goods {
    return new Proxy(goods, {
        get: function (target, key, receiver) {
            if (key === 'name' && target.discount !== 1) {
                return `${target[key]} 【折扣】`
            }
            if (key === 'price') {
                return `${target[key] * target.discount}`
            }
            // @ts-ignore
            return target[key]
        }
    });
}

export function goodsItemFactory(goods: Goods, goodList: GoodsList) {
    if (goods.discount) {
        goods = createDiscount(goods)
    }
    return new GoodsItem(goods, goodList)
}
