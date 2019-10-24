// 函数定义
function fnc(x: number, y: number) {
    return x + y
}
// 通过变量定义函数
let fnc1: (x: number, y: number) => number
// 通过别名
type fnc2 = (x: number, y: number) => number
// 通过接口
interface fnc3 {
    (x: number, y: number): number
}

// 函数形参和实参一一对应
fnc(1, 2)

// 可选参数
function fnc4(x: number, y?: number) {
    return y ? x + y : x
}
fnc4(1)

// 默认值
function fnc5(x: number, y = 0, z: number = 0, q = 0) {
    return x + y + z + q
}
fnc5(1, undefined, 3)

// 参数个数不确定，使用剩余参数
function fnc6(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur)
}

// 函数重载
function fnc7(...rest:number[]): number;
function fnc7(...rest:string[]): string;
function fnc7(...rest:any[]): any {
    let first = rest[0]
    if(typeof first === 'number'){
        return rest.reduce((pre, cur) => pre + cur)
    }
    if(typeof first === 'string'){
        return rest.join('')
    }
}