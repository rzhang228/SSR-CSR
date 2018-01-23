const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const logger = require('koa-logger')
const render = require('koa-ejs')

// 缓存起来
require('jsdom')
require('jquery')
require('axios')
require('./dot')

const router = require('./routes')
const app = new Koa()

app.use(logger())
app.use(static(path.join(__dirname, 'public')))
app.use(router.routes())
app.use(router.allowedMethods())

render(app, {
  root: path.join(__dirname, 'ejs'),
  layout: false,
  viewExt: 'ejs'
})

app.listen(3000)
