import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 引入element-ui
import "./plugins/element.js";
//引入axios
import axios from "axios";
// import { Message } from "element-ui";
axios.defaults.baseURL = "http://localhost:3000/";
Vue.prototype.$http = axios;
//设置请求拦截
axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
});

//设置响应拦截
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Vue.prototype.$message.error(err.response.data.message);
  }
);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
