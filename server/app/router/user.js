//用户路由
const express = require("express");
const router = express.Router();
const loginService = require("../service/loginService");
const registerService = require("../service/registerService");

const User = require("../model/User");
const role = require("../middleware/role");

//登录
router.post("/login", async (req, res, next) => {
  try {
    const data = await loginService.findOne(req.body);
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

//注册
router.post("/register", async (req, res, next) => {
  try {
    const data = await registerService.findOne(req.body);
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

// 获取用户列表
// router.get("/list", role, async (req, res, next) => {
  // try {
  //   const list = await User.find();
  //   return res.json({
  //     status: 200,
  //     message: "查询成功！",
  //     data: list,
  //   });
  // } catch (err) {
  //   return next(err);
  // }
// });

router.get("/list", async (req, res, next) => {
  try {
    const list = await User.find();
    return res.json({
      status: 200,
      message: "查询成功！",
      data: list,
    });
  } catch (err) {
    return next(err);
  }
});

//验证
// router.post("/verify", async (req, res, next) => {});

module.exports = router;