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