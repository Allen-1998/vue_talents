//入口文件
const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("./config/db");
const routers = require("./router/index");
const app = new express();

mongo(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routers(app);

app.listen(3000, () => {
  console.log("server listen at localhost:3000...");
});
