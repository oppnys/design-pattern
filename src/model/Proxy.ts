interface BaseImage {
    display(): void
}

class RealImage implements BaseImage {
    fileName: String

    constructor(fileName: String) {
        this.fileName = fileName
        this.loadFromDisk()
    }

    display() {
        console.log(`RealImage show 【${this.fileName}】`)
    }

    loadFromDisk() {
        console.log(`load 【${this.fileName}】 from disk`)
    }
}

class ProxyImage implements BaseImage {
    fileName: String
    private realImage: RealImage

    constructor(fileName: String) {
        this.fileName = fileName
        this.realImage = new RealImage(this.fileName)
    }

    display(): void {
        this.realImage.display()
    }
}

const proxy = new ProxyImage('aaa.png')
proxy.display()
