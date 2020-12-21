//管理员路由
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello admin...");
});

module.exports = router;
