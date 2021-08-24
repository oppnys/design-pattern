class Adapter {
    specialRequest() {
        return `Adapter specialRequest`
    }
}

class Target {
    private adapter: Adapter

    constructor() {
        this.adapter = new Adapter()
    }

    request() {
        const info = this.adapter.specialRequest()
        return `Target: ${info}`
    }
}

// 测试
const target = new Target()
const info = target.request()
console.log(info)
