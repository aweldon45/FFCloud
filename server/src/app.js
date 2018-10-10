const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

//middleware morgan & bodyparser & cors
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//routes
app.post('/register', (req, res) => {
  res.send({
    message:`Hello ${req.body.email}! this is a test`
  })
})

app.listen(process.env.PORT || 8081)
