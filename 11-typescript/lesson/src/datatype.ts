// 原始类型
let bool: boolean = true
let num: number = 10
let str: string = 'rng'

// 数组
let list: number[] = [1, 2, 3]
let arr: Array<number | string> = [1, 2, 3, '4']

// 元组
let tuple: [string, number] = ['1', 2]
tuple.push(3)// 打印['1', 2, 3]，不推荐使用
// tuple[3] 不允许

// 函数
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number// 函数类型，没有实现
compute = (a, b) => a + b

// 对象
let obj: object = { x: 1, y: 2 }
// obj.x = 3 不允许
let objOther: { x: number, y: number } = { x: 1, y: 2 }

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()

// undefined null
let un: undefined = undefined// 只能赋值undefined
let nu: null = null// 只能赋值null
// 非严格时，undefined null 可以赋值给其他变量

// void 没有任何返回值
let noReturn = () => {}

// any
let x

// never
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true){}
}