import Vue from "vue";
import VueRouter from "vue-router";
const Login = () => import( /* webpackChunkName: "login_register" */ "@/views/Login.vue");
const Register = () => import( /* webpackChunkName: "login_register" */ "@/views/Register.vue");
const Index = () => import( /* webpackChunkName: "index" */ "@/views/Index.vue");
const NotFound = () => import( /* webpackChunkName: "notfound" */ "@/views/404.vue");

const Home = () => import( /* webpackChunkName: "home_welcome" */ "@/views/Home.vue");
const WelCome = () => import( /* webpackChunkName: "home_welcome" */ "@/views/WelCome.vue");

const Source = () => import( /* webpackChunkName: "source_job_resume" */ "@/views/user/Source.vue");
const Job = () => import( /* webpackChunkName: "source_job_resume" */ "@/views/user/Job.vue");
const Resume = () => import( /* webpackChunkName: "source_job_resume" */ "@/views/user/Resume.vue");

const Profile = () => import( /* webpackChunkName: "profile_admin" */ "@/views/user/Profile.vue");
const Admin = () => import( /* webpackChunkName: "profile_admin" */ "@/views/user/Admin.vue");

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "/login"
  },
  {
    path: "/index",
    component: Index,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
    redirect: "/welcome",
    children: [{
        path: "/welcome",
        component: WelCome,
        meta: {
          title: '首页'
        }
      },
      {
        path: "/source",
        component: Source,
        meta: {
          parentTitle: '就业事务',
          childTitle: '生源信息'
        }
      },
      {
        path: "/job",
        component: Job,
        meta: {
          parentTitle: '就业事务',
          childTitle: '就业信息'
        }
      },
      {
        path: "/resume",
        component: Resume,
        meta: {
          parentTitle: '就业事务',
          childTitle: '简历管理'
        }
      },
      {
        path: "/profile",
        component: Profile,
        meta: {
          parentTitle: '个人中心',
          childTitle: '个人资料'
        }
      },
      {
        path: "/admin",
        component: Admin,
        meta: {
          parentTitle: '个人中心',
          childTitle: '密码管理'
        }
      },
    ]
  },
  {
    path: "*",
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
  const arr = [
    "/login",
    "/register"
  ]
  //判断目标路由是否在放行数组中
  if (arr.includes(to.path)) return next();
  //获取token
  const token = window.sessionStorage.getItem('token')
  if (token === '') {
    Vue.prototype.$message.warning("请先登录再进行此操作！");
    return next("/login");
  }
  next();
});

export default router;