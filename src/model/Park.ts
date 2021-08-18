interface Info {
    code?: String
    inTime?: Date | Number
    place?: Place
}

interface CarList {
    [key: string]: Info
}

// 停车场
export class Park {
    floors: Array<Floor>
    camera: Camera
    screen: Screen
    carList: CarList

    constructor(floors: Array<Floor>) {
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {}
    }

    emptyNum() {
        return this.floors.map((floor) => {
            return `第${floor.index}层还剩 ${floor.emptyPlaceNumber()} 个车位`
        }).join('\n')
    }

    in(car: Car) {
        const info: Info = this.camera.shot(car)
        const floorRandom = parseInt(Math.round(Math.random() * 2) + '') // 1-3
        const placeRandom = parseInt(Math.round(Math.random() * 99) + '') // 1-100
        const place: Place = this.floors[floorRandom].places[placeRandom]
        place.in()
        info.place = place
        // @ts-ignore
        this.carList[car.code] = info
    }

    out(car: Car) {
        // @ts-ignore
        const info: Info = car && this.carList[car.code]
        if (!info) {
            throw Error(`找不到该车辆${car.code}信息`)
        }
        const place: Place | undefined = info?.place
        place && place.out()
        this.screen.show(car, info.inTime)
        // @ts-ignore
        delete this.carList[car.code]
    }
}

// 楼层
export class Floor {
    index: Number
    places: Array<Place>

    constructor(index: Number, places: Array<Place>) {
        this.index = index
        this.places = places || []
    }

    emptyPlaceNumber() {
        let num = 0
        this.places.forEach((place) => {
            if (place.empty) num++
        })
        return num
    }
}

// 停车位
export class Place {
    empty: Boolean

    constructor(empty: Boolean) {
        this.empty = empty
    }

    in() {
        this.empty = false
    }

    out() {
        this.empty = true
    }
}

// 摄像头
export class Camera {
    shot(car: Car): Info {
        return {
            code: car.code,
            inTime: Date.now()
        }
    }
}

// 显示器
export class Screen {
    show(car: Car, inTime: any) {
        console.log(`车牌号: ${car.code}, 停车时间: ` + (Date.now() - inTime))
    }
}

//车
export class Car {
    code: String

    constructor(code: String) {
        this.code = code
    }
}

// 测试
const floors: Array<Floor> = []
for (let i = 1; i <= 3; i++) {
    const places: Array<Place> = []
    for (let j = 1; j <= 100; j++) {
        places.push(new Place(true))
    }
    floors.push(new Floor(i, places))
}

const park = new Park(floors)
const car1 = new Car('川A·88888')
const car2 = new Car('川A·99999')
const car3 = new Car('川A·77777')
const car4 = new Car('川A·66666')

console.log(`${car1.code} 来了`)
console.log(park.emptyNum())
park.in(car1)

console.log(`${car2.code} 来了`)
console.log(park.emptyNum())
park.in(car2)

console.log(`${car3.code} 来了`)
console.log(park.emptyNum())
park.in(car3)

console.log(`${car4.code} 来了`)
console.log(park.emptyNum())
park.in(car4)

setTimeout(() => {
    park.out(car1)
    console.log(park.emptyNum())
}, 3000)


setTimeout(() => {
    park.out(car2)
    console.log(park.emptyNum())
}, 3300)

setTimeout(() => {
    park.out(car2)
    console.log(park.emptyNum())
}, 3200)

setTimeout(() => {
    park.out(car4)
    console.log(park.emptyNum())
}, 1500)
