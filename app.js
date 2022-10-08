const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Jeff')
})

app.listen(port, (req, res) => {
  console.log(`App is running on localhost:${port}`)
})