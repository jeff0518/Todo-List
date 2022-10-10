const express = require("express");
const app = express();
const routes = require('./routes')
const port = 3000;
// 載入 method-override
const methodOverride = require('method-override') 

const Todo = require("./models/todo");
//Handlebars 設定
const exphbs = require("express-handlebars");
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
//mongoose 連線
const mongoose = require("mongoose"); // 載入 mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // 設定連線到 mongoDB
const db = mongoose.connection;
// 引用 body-parser
const bodyParser = require("body-parser");
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }));
// 設定每一筆請求都會透過 methodOverride 進行前置處理

db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("mongodb connected");
});
app.use(methodOverride("_method"));
app.use(routes)

app.listen(port, (req, res) => {
  console.log(`App is running on http://localhost:${port}`);
});
