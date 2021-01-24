import Vue from "vue";
import VueRouter from "vue-router";
const Login = () => import( /* webpackChunkName: "login_register" */ "@/views/Login.vue" );
const Register = () => import( /* webpackChunkName: "login_register" */ "@/views/Register.vue" );
const Index = () => import( /* webpackChunkName: "index" */ "@/views/Index.vue" );
const NotFound = () => import( /* webpackChunkName: "notfound" */ "@/views/404.vue" );

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
  if (to.path === "/index" || "/login") return next();
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
