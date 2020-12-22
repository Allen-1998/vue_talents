import Vue from "vue";
import VueRouter from "vue-router";
import Register from "views/Register.vue";
import Login from "views/Login.vue";
import Index from "views/Index.vue";
import NotFound from "views/404.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/index" },
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

export default router;
