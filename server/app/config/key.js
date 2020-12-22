const md5 = require("blueimp-md5");

//定义md5三重加密方法
code = (val) => {
  return md5(md5(val) + "ice");
};

module.exports = {
  code: code,
  //jwt私钥
  secret: "secret-ice",
};
