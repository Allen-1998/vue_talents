const loginDao = require("../dao/loginDao");
const { code } = require("../config/key");

module.exports = {
  findOne: async (body) => {
    const user = await loginDao.findOne(body.username);
    if (user) return { status: 422, message: "该用户已存在！" };
    body.password = code(body.password);
    await loginDao.addOne(body);
    return { status: 200, message: "注册成功！"};
  },
};
