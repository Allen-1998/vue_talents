const jwt = require("jsonwebtoken");
const User = require("../model/User");
const { secret } = require("../config/key");
//验证身份中间件
const role = async (req, res, next) => {
  try {
    //获取token
    const token = req.headers.authorization.split(" ").pop();
    const { _id, username } = jwt.verify(token, secret);
    //查询用户是否存在
    const user = await User.findById(_id);
    if (!user)
      return res.status(422).json({
        status: 422,
        message: "token验证失败！",
      });
    if (username !== user.username)
      return res.status(422).json({
        status: 422,
        message: "token验证失败！",
      });
    if (user.role !== 1)
      return res.status(409).json({
        status: 409,
        message: "没有权限！",
      });
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = role;
