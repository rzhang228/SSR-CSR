const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const logger = require('koa-logger')

require('jsdom') // 缓存起来
require('jquery')

const router = require('./routes')
const app = new Koa()

app.use(logger())
app.use(static(path.join(__dirname, 'public')))
app.use(router.routes())

app.listen(3000)