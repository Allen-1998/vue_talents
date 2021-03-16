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
//qs
import qs from 'qs'

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 设置请求拦截
axios.interceptors.request.use((config) => {
  const _id = store.state.user._id
  //判断请求的类型：如果是post请求就把默认参数拼到data里面；如果是get请求就拼到params里面
  if (_id) {
    if(config.method==='post'){
      config.data=({
        _id,
        ...config.data
      })
    }else if(config.method==='get'){
      config.params=({
        _id,
        ...config.params
      })
    }
  }
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
});
  
//设置响应拦截
axios.interceptors.response.use(
  (res) => {
    if (res.data.message) {
      Vue.prototype.$message.success(res.data.message);
    }
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
