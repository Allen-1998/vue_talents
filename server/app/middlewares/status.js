const User = require("../model/User");
//验证状态中间件
const status = async (req, res, next) => {
  try {
    //查询用户是否存在
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return res.status(422).json({
        status: 422,
        message: "用户状态验证失败！",
      });
    if (user.status !== 1)
      return res.status(409).json({
        status: 409,
        message: "没有登录权限！",
      });
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = status;
