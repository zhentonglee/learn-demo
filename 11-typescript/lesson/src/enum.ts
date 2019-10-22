// 数字枚举
enum Role {
    Reporter,
    Developer,
    Owner,
    Guest
}
console.log(Role.Reporter)// 0

// 字符串枚举
enum Message {
    Success = 'something',
    Fail = 'something'
}

// 异构枚举
enum Answer {
    N,
    Y = 'yes'
}

// 枚举成员值定义之后不能修改，为只读类型

// 枚举成员
enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 3,
    // compute
    d = Math.random(),
    e = 'str'.length
}

// 常量枚举，编译时会被移除，作用当对象使用，只需要对象的值
const enum Month {
    Jan,
    Feb,
    Mar
}

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = '123', b = '456' }

let e: E = 3
let f: F = 3
// e===f 不允许

let e1: E.a = 3
let e2: E.b = 3
// e1===e2 不允许
let e3: E.a = 6
e1 === e3

let g1: G = G.b
let g2: G.a = G.a// 字符串类型只能赋值自身