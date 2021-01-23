const md5 = require("blueimp-md5");

module.exports = {
  //md5三重加密
  code: (val) => {
    return md5(md5(val) + "ice");
  },
  //jwt私钥
  secret: "secret-ice",
};
