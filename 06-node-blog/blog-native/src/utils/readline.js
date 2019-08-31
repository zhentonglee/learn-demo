const fs = require('fs')
const path = require('path')
const readline = require('readline')

//文件名
const fileName = path.join(__dirname, '../', '../', 'logs', access.log)
//创建 read stream
const readStream = fs.createReadStream(fileName)
//创建readline对象
const rl = readline.createInterface({
    input: readStream
})

let chromeNum = 0, num = 0
//逐行读取
