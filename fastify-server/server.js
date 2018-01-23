// Require the framework and instantiate it
const fastify = require('fastify')()

const opts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'number'
            },
            title: {
              type: 'string'
            }
          }
        }
      }
    }
  }
}

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send('hello')
})

// Declare a route
fastify.get('/api/test', opts, async function (request, reply) {
  const pro = new Promise((reslove, reject) => {
    const data = []
    for (let i = 1; i <= 10000; i++) {
      data.push({
        id: i,
        title: `test${i}`
      })
    }
    setTimeout(() => {
      reslove(data)
    }, 20)
  })

  return await pro
})

// Run the server!
fastify.listen(4000, function (err) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})