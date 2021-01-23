import Vue from "vue";
import VueRouter from "vue-router";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Index from "@/views/Index.vue";
import NotFound from "@/views/404.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/index",
    name: "Index",
    component: Index,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "*",
    name: "Not Found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径跳转来
  //next 一个函数，表示放行
  // next() 放行 next('/login') 强制跳转
  if (to.path === '/index' || "/login") return next();
  if (to.path === "/register") return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) {
    Vue.prototype.$message.warning("请先登录再进行此操作！");
    window.sessionStorage.clear();
    return next("/login");
  }
  next();
});

export default router;
