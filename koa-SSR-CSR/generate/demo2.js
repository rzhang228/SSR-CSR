const fs = require('fs')
const { JSDOM } = require('jsdom')
const jquery = require('jquery')

const html = fs.readFileSync(process.cwd() + '/views/demo2.html', 'utf8')

const render = () => {
  console.time('1')
  const dom = new JSDOM(html)
  console.timeEnd('1')
  console.time('2')
  const { window } = dom
  const $ = jquery(window)
  console.timeEnd('2')
  console.time('4')
  const res = dom.serialize()
  console.timeEnd('4')
  return res
}

module.exports = render