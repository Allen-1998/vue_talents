//用户路由
const express = require("express");
const router = express.Router();
const sourceService = require("../service/sourceService");

//生源信息--保存
router.post("/save", async (req, res, next) => {
  try {
    const data = await sourceService.save(req.body);
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

//生源信息--查询
router.get("/find", async (req, res, next) => {
  try {
    const data = await sourceService.findById(req.query._id);
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

//生源信息--修改
router.post("/update", async (req, res, next) => {
  try {
    const data = await sourceService.findByIdAndUpdate(req.body);
    res.status(data.status).json(data)
  } catch (err) {
    return next(err);
  }
});

module.exports = router;