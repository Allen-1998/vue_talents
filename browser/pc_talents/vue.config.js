const path = require("path"); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
module.exports = {
  chainWebpack: (config) => {
    //配置路径别名
    config.resolve.alias.set("assets", resolve("./src/assets"));
    config.resolve.alias.set("views", resolve("./src/views"));
    config.resolve.alias.set("components", resolve("./src/components"));
  },
};
