class State {
    color: String

    constructor(color: String) {
        this.color = color
    }

    handle(context: Context) {
        context.setState(this)
    }
}


class Context {
    private state: State | null

    constructor() {
        this.state = null
    }

    setState(state: State) {
        this.state = state
    }

    getState(): State | null {
        return this.state
    }
}

//测试
const context = new Context()
const green = new State('green')
const yellow = new State('yellow')
const red = new State('red')
green.handle(context)

console.log(context.getState())
