class Observer {
    name: string
    subject: Subject
    callback: Function

    constructor(name: string, subject: Subject, callback: Function) {
        this.name = name
        this.subject = subject
        this.callback = callback
        this.subject.attach(this)
    }

    update() {
        this.callback()
    }
}

class Subject {
    state: number
    observers: Array<Observer>

    constructor() {
        this.state = 0
        this.observers = []
    }

    getState(): number {
        return this.state
    }

    setState(state: number) {
        this.state = state
        this.notifyAllObserver()
    }

    notifyAllObserver() {
        this.observers.forEach((observer: Observer) => {
            observer.update()
        })
    }

    attach(observer: Observer) {
        this.observers.push(observer)
    }
}

const s1 = new Subject()

const o1 = new Observer('s1', s1, () => {
    console.log(`s1`)
})

const o2 = new Observer('s2', s1, () => {
    console.log(`s2`)
})

const o3 = new Observer('s3', s1, () => {
    console.log(`s3`)
})

s1.setState(10)

