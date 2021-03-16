//用户路由
const express = require("express");
const router = express.Router();
const userService = require('../service/userService')

//登录
router.post("/login",async (req, res, next) => {
  try {
    const data = await userService.findOne(req.body,req.url);
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

router.get("/", (req, res) => {
  res.send("hello admin...");
});

module.exports = router;
