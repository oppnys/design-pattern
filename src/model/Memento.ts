class Memento {
    content: string

    constructor(content: string) {
        this.content = content
    }

    getContent() {
        return this.content
    }
}

class CareTaker {
    list: Array<Memento>

    constructor() {
        this.list = []
    }

    add(memento: Memento) {
        this.list.push(memento)
    }

    get(index: number): Memento {
        return this.list[index]
    }
}

class Editor {
    content: string

    constructor() {
        this.content = ''
    }

    setContent(content: string) {
        this.content = content
    }

    getContent() {
        return this.content
    }

    saveContentToMemento() {
        return new Memento(this.content)
    }

    getContentFromMemento(memento: Memento) {
        this.content = memento.getContent()
    }
}

// usage
const editor = new Editor()
let careTaker = new CareTaker()
editor.setContent('111')
editor.setContent('222')
careTaker.add(editor.saveContentToMemento())

editor.setContent('333')
careTaker.add(editor.saveContentToMemento())

editor.setContent('444')

console.log(editor.getContent())
editor.getContentFromMemento(careTaker.get(1))
console.log(editor.getContent())

editor.getContentFromMemento(careTaker.get(0))
console.log(editor.getContent())

console.log(careTaker.list)
