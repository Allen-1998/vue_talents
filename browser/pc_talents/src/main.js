import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import axios from "axios";
import store from '@/store'
//导入全局样式表
import "@/assets/global.css";
//导入全局表单校验方法
import formRules from '@/utils/form-rules.js'
Vue.prototype.$rules = formRules
// global filters
import * as filters from './filters' 

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 设置请求拦截
axios.interceptors.request.use((config) => {
    config.headers.Authorization = window.sessionStorage.getItem('token');
    return config;
  });
  
//设置响应拦截
axios.interceptors.response.use(
  (res) => {
    Vue.prototype.$message.success(res.data.message);
    return res.data;
  },
  (err) => {
    if (!err.response) {
      Vue.prototype.$message.error('服务器错误，请稍后再试！');
    }else{
      Vue.prototype.$message.error(err.response.data.message);
    }
     return
  }
);

// 引入element-ui
import "@/plugins/element.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
