//用户路由
const express = require("express");
const router = express.Router();
const userService = require('../service/userService')
const { code } = require("../config/key");
const role = require("../middleware/role");

//登录
router.post("/login",async (req, res, next) => {
  try {
    const data = await userService.findOne(req.body,req.url);
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

//注册
router.post("/register", async (req, res, next) => {
  try {
    const data = await userService.save(req.body);
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

//个人资料修改
router.post("/updateProfile",role, async (req, res, next) => {
  try {
    const data = await userService.findByIdAndUpdate(req.body);
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

//密码修改
router.post("/updateAdmin",role, async (req, res, next) => {
  try {
    let { _id,oldPassword,password} = req.body;
    let data = await userService.findById(_id,oldPassword);
    if (!data) {
      password = code(password)
      data = await userService.findByIdAndUpdate({_id,password});
    }
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

module.exports = router;