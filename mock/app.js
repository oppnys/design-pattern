const express = require('express')

const app = express()

const goodsList = [
    {
        "id": 1,
        "name": "《JavaScript设计模式》",
        "price": 120,
        "description": "JavaScript设计模式JavaScript设计模式JavaScript设计模式",
        "discount": 0.9
    },
    {
        "id": 2,
        "name": "《JavaScript从入门到放弃》",
        "price": 430,
        "description": "JavaScript从入门到放弃JavaScript从入门到放弃",
        "discount": 1
    },
    {
        "id": 3,
        "name": "《设计模式之禅》",
        "price": 90,
        "description": "设计模式之禅设计模式之禅设计模式之禅",
        "discount": 1
    },
    {
        "id": 4,
        "name": "《你不知道的JavaScript》",
        "price": 200,
        "description": "你不知道的JavaScript你不知道的JavaScript你不知道的JavaScript",
        "discount": 0.7
    }
]

app.get('/api/goodsList', (req, res) => {
    res.json(goodsList)
})

app.listen(8090, () => {
    console.log(`the http server running at http://localhost:8090`)
})
