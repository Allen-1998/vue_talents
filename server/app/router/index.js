//路由管理
const userRouter = require("./user");
const adminRouter = require("./admin");
const sourceRouter = require("./source");
const jobRouter = require("./job");
const resumeRouter = require("./resume");

const role = require("../middleware/role");

module.exports = (app) => {
  app.use("/user", userRouter);
  app.use('/source', role, sourceRouter)
  app.use('/job', role, jobRouter)
  app.use('/resume', role, resumeRouter)
  app.use("/admin", adminRouter);
};
