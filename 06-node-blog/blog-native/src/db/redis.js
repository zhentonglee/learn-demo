const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

//创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
    console.error(err)
})

function set(key, val) {
    if(typeof val === 'object'){
        val = JSON.parse(val)
    }
    redisClient.set(key, val, redis.print)
}

function get(key) {
    
}

module.exports = {
    set,
    get
}