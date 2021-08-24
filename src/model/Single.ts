export class Single {
    private static instance: Single;

    private constructor() {
    }

    public static getInstance(): Single {
        if (this.instance === null || this.instance === undefined) {
            this.instance = new Single()
        }
        return this.instance as Single
    }

    public say() {
        console.log(`hi...`)
    }
}

// const single = new Single()
const singleInstance1 = Single.getInstance()
const singleInstance2 = Single.getInstance()

console.log(`singleInstance1 === singleInstance2: ${singleInstance1 === singleInstance2}`)
