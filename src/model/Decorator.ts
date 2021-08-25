class Circle {
    draw() {
        console.log(`draw circle`)
    }
}

class Decorator {
    circle: Circle

    constructor(circle: Circle) {
        this.circle = circle
    }

    draw() {
        this.circle.draw()
        this.setRedBound(this.circle)
    }

    setRedBound(circle: Circle) {
        console.log(`circle bound color is red`)
    }
}

//test
const circle = new Circle()
const decorator = new Decorator(circle)
console.log(decorator)

decorator.draw()

console.log(`===========装饰器===========`)

@sealed
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @readonly @log
    greet(hi: String) {
        console.log(this.greeting)
        return `Hello, ${hi} ` + this.greeting;
    }
}

// 我们可以这样定义@sealed装饰器：
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function readonly(target: any, key: String, decorator: PropertyDescriptor): PropertyDescriptor {
    decorator.writable = false
    return decorator
}

function log(target: any, key: String, decorator: PropertyDescriptor): PropertyDescriptor {
    const oldValue = decorator.value
    decorator.value = function () {
        console.log(`print method name ${key}, arguments:`, Array.from(arguments))
        return oldValue.apply(target, arguments)
    }
    return decorator
}

const g = new Greeter('hee')
console.log(g.greet('hi'))

