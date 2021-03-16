//连接数据库
const mongoose = require("mongoose");
const mongoUrl = "mongodb://localhost:27017/talents";
mongoose.set('useFindAndModify', false)

module.exports = (app) => {
  // 连接数据库
  mongoose.connect(
    mongoUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("mongodb connect...");
    }
  );
};
