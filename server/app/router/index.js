//路由管理
const homeRouter = require("./home");
const userRouter = require("./user");
const sourceRouter = require("./source");
const jobRouter = require("./job");
const resumeRouter = require("./resume");

const role = require("../middleware/role");

module.exports = (app) => {
  app.use("/home", homeRouter);
  app.use(role)
  app.use("/user", userRouter);
  app.use('/source', sourceRouter)
  app.use('/job', jobRouter)
  app.use('/resume', resumeRouter)
};
