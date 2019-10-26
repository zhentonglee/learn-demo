interface Human {
    name: string
    eat(): void
}
// 类继承接口
class Asian implements Human {
    constructor(name: string) {
        this.name = name
    }
    name: string
    eat() { }
}
// 接口继承多个接口
interface Man extends Human {
    run(): void
}
interface Child {
    cry(): void
}
interface Boy extends Man, Child {

}
let boy: Boy = {
    name: '',
    eat() { },
    run() { },
    cry() { }
}

// 接口继承类
class Auto {
    state = 1
}
interface AutoInterFace extends Auto { }
class C implements AutoInterFace {
    state = 2
}
class Bus extends Auto implements AutoInterFace { }

// 类、接口相互之间的关系
// 接口通过extends相互继承、类通过extends相互继承，实现方法和属性的复用
// 接口通过类来实现 implements (public)
// 接口也可以抽离出类的成员 extends (public private protected)