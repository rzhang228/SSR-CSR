const fs = require('fs')
const { JSDOM } = require('jsdom')
const jquery = require('jquery')
const axios = require('axios')
const tpl = require('../template/demo1')

const html = fs.readFileSync(process.cwd() + '/views/demo1.html', 'utf8')

const render = async () => {
  console.time('1')
  const dom = new JSDOM(html)
  console.timeEnd('1')

  console.time('2')
  const { window } = dom
  const $ = jquery(window)
  console.timeEnd('2')

  console.time('3')
  const { data } = await axios.get('http://localhost:4000/api/test') // $.ajax存在跨域问题
  console.timeEnd('3')

  console.time('4')
  const str = tpl(data)
  console.timeEnd('4')

  console.time('5')
  $('#root').html(str)
  console.timeEnd('5')

  console.time('6')
  const res = dom.serialize()
  console.timeEnd('6')

  return res
}

module.exports = render
