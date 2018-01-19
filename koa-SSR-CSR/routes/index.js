const Router = require('koa-router')

const router = new Router()

router.get('/demo1', function (ctx, next) {
  ctx.body = require('../generate/demo1')()
})

router.get('/demo2', function (ctx, next) {
  ctx.body = require('../generate/demo2')()
})

module.exports = router