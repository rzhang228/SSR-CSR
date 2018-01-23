const axios = require('axios')

module.exports = async (ctx, next) => {
  const { data } = await axios.get('http://localhost:4000/api/test')
  await ctx.render('demo5', { data })
}