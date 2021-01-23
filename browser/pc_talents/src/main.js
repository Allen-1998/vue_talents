import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import axios from "axios";
//导入全局样式表
import "@css/global.css";
//导入全局表单校验方法
import formRules from '@/utils/formRules.js'
Vue.prototype.$rules = formRules

// 设置请求拦截
axios.interceptors.request.use((config) => {
    config.headers.Authorization = window.sessionStorage.getItem("token");
    return config;
  });
  
//设置响应拦截
axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (!err.response) {
      return Vue.prototype.$message.error('服务器未响应，请稍后再试！');
    }
    return Vue.prototype.$message.error(err.response.data.message);
  }
);


// 引入element-ui
import "@/plugins/element.js";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
