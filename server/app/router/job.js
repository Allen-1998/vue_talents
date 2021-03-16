//用户路由
const express = require("express");
const router = express.Router();
const jobService = require("../service/jobService");

//就业信息--保存
router.post("/save", async (req, res, next) => {
    try {
      const data = await jobService.save(req.body);
      res.status(data.status).json(data)
    } catch (err) {
      return next(err);
    }
  });
  
  //就业信息--查询
  router.get("/find", async (req, res, next) => {
    try {
      const data = await jobService.findById(req.query._id);
      res.status(data.status).json(data)
    } catch (err) {
      return next(err);
    }
  });
  
  //就业信息--修改
  router.post("/update", async (req, res, next) => {
    try {
      const data = await jobService.findByIdAndUpdate(req.body);
      res.status(data.status).json(data)
    } catch (err) {
      return next(err);
    }
  });
  

module.exports = router;