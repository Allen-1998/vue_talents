//管理员路由
const express = require("express");
const router = express.Router();
const loginService = require("../service/loginService");

//登录
router.post("/login", async (req, res, next) => {
  try {
    const data = await loginService.findOne(req.body,req.baseUrl);
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

router.get("/", (req, res) => {
  res.send("hello admin...");
});

module.exports = router;
