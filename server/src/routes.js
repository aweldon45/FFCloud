module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message:`Hello ${req.body.email}! this is a test`
    })
  }),
  app.post('/', (req, res) => {
    res.send({
      message:`Hello ${req.body.name}! You are a ${req.body.title}`
    })
  })
}
