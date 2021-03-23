//用户路由
const express = require("express");
const router = express.Router();
const userService = require('../service/userService')
const { code } = require("../config/key");

//个人资料修改
router.post("/updateProfile", async (req, res, next) => {
  try {
    const data = await userService.findByIdAndUpdate(req.body);
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

//密码修改
router.post("/updateAdmin", async (req, res, next) => {
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

//获取用户列表
router.post("/getUsers", async (req, res, next) => {
  try {
    const data = await userService.findUsers(req.body);
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

//修改用户状态
router.post("/changeStatus", async (req, res, next) => {
  try {
    const { id:_id,status} = req.body;
    const data = await userService.findByIdAndUpdate({_id,status});
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

module.exports = router;