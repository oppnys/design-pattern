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

    greet() {
        return "Hello, " + this.greeting;
    }
}

// 我们可以这样定义@sealed装饰器：
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

const greet = new Greeter('hi')
console.log(greet.greet())
