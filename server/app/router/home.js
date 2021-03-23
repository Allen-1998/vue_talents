//登录注册路由
const express = require("express");
const router = express.Router();
const userService = require('../service/userService')

//登录
router.post("/login",async (req, res, next) => {
  try {
    const data = await userService.findOne(req.body);
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

module.exports = router;