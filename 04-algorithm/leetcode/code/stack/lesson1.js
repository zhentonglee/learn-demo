export default (arr) => {
    // 用数组来实现堆栈结构，pop,push
    let result = []
    // 对数组进行遍历，遍历的目的是处理得分
    arr.forEach(item => {
        switch (item) {
            case 'C':
                if (result.length) {
                    result.pop()
                }
                break
            case 'D':
                result.push(result[result.length - 1] * 2)
                break
            case '+':
                result.push(result[result.length - 2] + result[result.length - 1])
                break
            default:
                result.push(item * 1)
        }
    })
    return result.reduce((total, num) => { return total + num })
}
