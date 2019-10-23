/**
 * 对象类型接口
 */
interface List {
    id: number;
    name: string;
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach((item) => {
        console.log(item.id, item.name)
        // if(item.age) {}
    })
}
let result = {
    data: [
        { id: 1, name: 'tom', sex: 'man' },
        { id: 2, name: 'jerry' }
    ]
}
render({
    data: [
        { id: 1, name: 'tom', sex: 'man' },
        { id: 2, name: 'jerry' }
    ]
} as Result)//类型断言 或者 <Result>

interface List01 {
    readonly id: number;// 只读属性
    name: string;
    [x: string]: any;
    age?: number;// 可有可无
}


interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['a', 'b']
interface Names {
    [x: string]: string;
    // y: number;
    [z: number]: string;
}

/**
 * 函数类型接口
 */
let add01: (x: number, y: number) => number
interface Add02 {
    (x: number, y: number): number
}
type Add03 = (x: number, y: number) => number

// 函数实现
let addFc: Add03 = (a, b) => a + b

// 混合类型接口
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}
// 实现
function getLib() {
    let lib: Lib = (() => { }) as Lib
    lib.version = '1.0.0'
    lib.doSomething = () => { }
    return lib;
}
let lib1 = getLib()
lib1()
lib1.doSomething()