const jwt = require("jsonwebtoken");
const User = require("../model/User");
const { secret } = require("../config/key");
const roleUtil = require('../util/roleUtil')

//验证身份中间件
const role = async (req, res, next) => {
  try {
    //获取token
    const token = req.headers.authorization.split(" ").pop()
    const { _id, username } = jwt.verify(token, secret);
    //查询用户是否存在
    const user = await User.findById(_id)
    if (!user || username !== user.username) {
      const  data = roleUtil.TOKEN_ERR
      return res.status(data.status).json(data)
    }
    // if (req.body.role === 'user' && user.role !== 1){
    //   const  data = roleUtil.ROLE_ERR
    //   return res.status(data.status).json(data)
    // }
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = role;
