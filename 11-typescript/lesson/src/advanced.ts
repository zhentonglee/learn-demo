import { type } from "os"

// 类型推断

// 类型兼容
// 当一个类型Y可以赋值给另一个类型X时，我们就可以说类型X兼容类型Y
// x兼容Y  x(目标类型)=Y(源类型)
// 口诀：
// 结构之间兼容：成员少的兼容成员多的
// 函数之间兼容：参数多的兼容参数少的

// 类型保护
// typescript能够在特定的区块中保证变量属于某种确定的类型。
// 可以在此区块中放心地引用此类型的属性,或者调用此类型的方法。
// 四种方法
enum Type { Strong, Week }
class Java {
    helloJava() {
        console.log('hello java')
    }
    java: any
}
class JavaScript {
    helloJavaScript() {
        console.log('hello javascript')
    }
    javascript: any
}

function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    // 类型断言，可读性很差，因此使用类型保护
    // if ((lang as Java).helloJava) {
    //     (lang as Java).helloJava()
    // } else {
    //     (lang as JavaScript).helloJavaScript()
    // }

    // instanceof
    // if (lang instanceof Java) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }

    // in
    // if ('java' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }

    // typeof
    // if (typeof x === 'string') {
    //     x.length
    // } else {
    //     x.toFixed(2)
    // }

    // 通过创建类型保护函数
    if (isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
    return lang
}

// 高级类型
// 交叉类型（适用于对象混用的场景）和联合类型
interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}
let pet: DogInterface & CatInterface = {
    run() { },
    jump() { }
}

let a: string | number = '0'
let b: 'a' | 'c' = 'c'
let c: 1 | 2 | 3 = 1

interface Square {
    kind: 'square'
    size: number
}
interface Rect {
    kind: 'rect'
    width: number
    height: number
}
type Shape = Square | Rect
function area(s: Shape) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size
        case 'rect':
            return s.width * s.height
    }
}

// 索引类型
let obj1 = {
    a: 1,
    b: 2,
    c: 3
}
function getValues<T, K extends keyof T>(obj1: T, keys: K[]): T[K][] {
    return keys.map(key => obj1[key])
}
getValues(obj1, ['a', 'b'])
// getValues(obj1, ['e', 'f'])

// keyof T
interface Obj {
    a: number,
    b: number
}
let key: keyof Obj
// T[k]
let value: Obj['a']

// 映射类型
interface Obj2 {
    a: string
    b: number
    c: boolean
}
type ReadonlyObj = Readonly<Obj2>
type PartialObj = Partial<Obj2>
type PickObj = Pick<Obj2, 'a' | 'b'>
type RecordObj = Record<'x' | 'y', Obj2>

// 条件类型
type TypeName<T> =
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends Function ? 'function' :
    'object'
type T1 = TypeName<string>
type T2 = TypeName<string[]>
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

// Exclude<T, U>
// NonNullAable<T>
// Extract<T, U>
type T6 = Exclude<'a' | 'b' | 'c', 'a' | 'e'>

type T7 = ReturnType<() => string>