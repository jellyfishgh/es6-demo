export default class Foo {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    toString() {
        return `${this.name}:${this.age}`
    }
}