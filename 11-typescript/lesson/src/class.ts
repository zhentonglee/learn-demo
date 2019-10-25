class Dog {
    constructor(name: string) {
        this.name = name
    }
    name: string
    run() { }
    private pri() { } // 实例和子类中都不能调用
    protected pro() { } // 受保护成员，不能在实例中调用，能在子类中调用
    readonly legs: number = 4 // 只读属性
    static food: string = 'bones' // 静态成员，不能在实例中调用，可以在子类中调用
}
// 类属性只在实例上，类方法在原型上

// 类的继承
class Hasky extends Dog {
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
    }
    // color: string
}

// 抽象类，只能被继承，不能被实例，ts的扩展
abstract class Animal {
    eat() {
        console.log('eat')
    }
    // 抽象方法，实现多态
    abstract sleep(): void
}
class Cat extends Animal {
    constructor(name: string) {
        super()
        this.name = name
    }
    name: string
    run() { }
    sleep() {
        console.log('cat sleep')
    }
}
let cat = new Cat('miao')
cat.eat()

class Duck extends Animal {
    sleep() {
        console.log('duck sleep')
    }
}
let duck = new Duck()

let animals: Animal[] = [cat, duck]
animals.forEach(i => {
    i.sleep() // 多态
})

// 方法的链式调用
class WorkFlow {
    step1() {
        return this
    }
    step2() {
        return this
    }
}
new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
    next() {
        return this
    }
}
new MyFlow().next().step1().next().step2()
