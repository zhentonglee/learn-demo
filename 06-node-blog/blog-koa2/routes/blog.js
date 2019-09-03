const router = require('koa-router')()

router.prefix('/api/blog')

router.get('/list', async function (ctx, next) {
    const query = ctx.query
    ctx.body = {
        errno: 0,
        query,
        data: ['abc']
    }
})

module.exports = router
