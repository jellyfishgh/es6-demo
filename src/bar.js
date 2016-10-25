export default class Bar {
    constructor() {
        this.init()
    }
    init() {
        this.items = []
        for(let i = 0; i < 10; i++) {
            this.items.push(i)
        }
    }
    print() {
        this.items.map((item) => {
            console.log(item)
        })
    }
}