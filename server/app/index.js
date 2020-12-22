//入口文件
const express = require("express");
//post请求
const bodyParser = require("body-parser");
//跨域
const cors = require("cors");
//数据库
const mongo = require("./config/db");
const routers = require("./router/index");
const app = new express();

mongo(app);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routers(app);

//处理错误请求
app.use((err, req, res, next) => {
  return res.json({
    status: 500,
    message: "服务器错误，请稍后再试！",
  });
});

app.listen(3000, () => {
  console.log("server listen at localhost:3000...");
});
