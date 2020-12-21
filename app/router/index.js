//路由管理
const userRouter = require("./user");
const adminRouter = require("./admin");

module.exports = (app) => {
  app.use("/user", userRouter);
  app.use("/admin", adminRouter);
};
