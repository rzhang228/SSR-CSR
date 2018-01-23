const Router = require('koa-router')

const demo1 = require('../generate/demo1')
const demo3 = require('../generate/demo3')
const demo5 = require('../generate/demo5')

const router = new Router()

router.get('/demo1', async function (ctx, next) {
  ctx.body = await demo1()
})

router.get('/demo3', async function (ctx, next) {
  ctx.body = await demo3()
})

router.get('/demo5', async function (ctx, next) {
  await demo5(ctx, next)
})

module.exports = router