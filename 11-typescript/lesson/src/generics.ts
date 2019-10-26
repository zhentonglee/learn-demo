// 泛型
function log<T>(value: T): T {
    return value
}
// 两种调用方式
log<string[]>(['a', 'b'])
log(['a', 'b'])

// 泛型函数类型
type Log = <T>(value: T) => T
let myLog: Log = log

// 泛型接口
// interface Logger<T> {
//     (value: T): T
// }
// let myLogger: Logger<number> = log
// 默认类型
interface Logger<T = string> {
    (value: T): T
}
let myLogger: Logger = log
myLogger('001')

// 泛型类
class LogError<T> {
    run(value: T) {
        return value
    }
}
let logError = new LogError<number>()
logError.run(0)
let logError2 = new LogError()
logError2.run('0')

interface Length {
    length: number
}
// 受到约束，必须要用length属性
function logInfo<T extends Length>(value: T): T {
    value.length
    return value
}
logInfo([0])
logInfo('0')
logInfo({ length: 0 })