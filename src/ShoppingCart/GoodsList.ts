import Goods from "./Goods";
import App from "./App";
import axios, {AxiosResponse} from 'axios'
import {goodsItemFactory} from "./GoodsItem";

export default class GoodsList {
    el: Element
    app: App
    goodsList?: Array<Goods>

    constructor(app: App) {
        this.el = document.createElement('ul')
        this.app = app
        try {
            this.init()
        } catch (e) {
            console.log(e)
        }
    }

    async init() {
        this.goodsList = await this.loadData()
        this.initGoodsItem()
        this.render()
    }

    async loadData(): Promise<Array<Goods>> {
        const response: AxiosResponse = await axios.get<Array<Goods>>('/api/goodsList')
        return response.data as Array<Goods>
    }

    initGoodsItem() {
        this.goodsList?.forEach((goods) => {
            goodsItemFactory(goods, this)
        })
    }

    render() {
        this.app.el.append(this.el)
    }
}

