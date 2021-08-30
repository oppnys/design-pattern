class UserPromise {
    func: Function
    successList: Array<Function>
    failList: Array<Function>

    constructor(func: Function) {
        this.successList = []
        this.failList = []
        this.func = func
        this.func(
            () => {
            },
            () => {
            }
        )
    }

    then(successFn: Function, failFn: Function) {
        this.successList.push(successFn)
        this.failList.push(failFn)
    }
}


// Usage
function loadImage(src: string) {
    return new Promise((resolve, reject) => {
        const image = document.createElement('img')
        image.onload = function () {
            resolve(image)
        }
        image.onerror = function () {
            reject(image)
        }
        image.src = src
    })
}

const url = 'http://localhost/static/img/welcome-pic.350c3ab6.png'
loadImage(url).then(res => {
    console.log(res)
})
