const express = require('express')
const app = express()
const port = 3000
//Handlebars 設定
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
//mongoose 連線
const mongoose = require('mongoose') // 載入 mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,  useUnifiedTopology: true } ) // 設定連線到 mongoDB
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected')
})


app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, (req, res) => {
  console.log(`App is running on http://localhost:${port}`)
})