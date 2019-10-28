// 声明合并
interface A {
    x: number;
    // y: string 非函数成员
    foo(bar: number): number; // 3
    foo(bar: 'a'): number; // 0 字面量类型优先级最高
}
interface A {
    y: number;
    foo(bar: string): string; // 1
    foo(bar: number[]): number[]; // 2
}
let a: A = {
    x: 0,
    y: 1,
    foo(bar: any) {
        return bar
    }
}

// 命名空间与函数的合并
function Lib() { }
namespace Lib {
    export let version = '1.0.0'
}
console.log(Lib.version)
// 与类
// 与枚举