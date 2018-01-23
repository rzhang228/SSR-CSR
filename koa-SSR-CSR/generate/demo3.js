const axios = require('axios')
const dots = require('../dot')

const render = async () => {
  const { data } = await axios.get('http://localhost:4000/api/test')
  return dots.demo3(data)
}

module.exports = render