<template>
  <div class="loginContainer">
    <img src="~@img/logo.png" @click="home" />
    <h3>{{ title }}</h3>
    <el-card>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="$rules.handle"
        status-icon
        v-loading="loading"
        @keyup.enter.native="login"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
            v-focus
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 身份 -->
        <el-form-item>
          <el-radio v-model="loginForm.role" label="2">用户</el-radio>
          <el-radio v-model="loginForm.role" label="1">管理员</el-radio>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item>
          <el-button type="success" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-button @click="register">{{ msg }}</el-button>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      loading: false,
      title: "Sign in to Talents",
      msg: "New to Talents? Creat an account.",
      loginForm: {
        //普通用户
        username: "xxx",
        password: "Guo123456",
        role: "2",
        //管理员
        // username: "root",
        // password: "Guo123456",
        // role: "1",
      },
    };
  },
  methods: {
    home() {
      this.$router.push("/index");
    },
    register() {
      this.$router.push("/register");
    },
    //点击按钮提交表单
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;
        this.loading = !this.loading;
        // 可发起登录网络请求
        const res = await api.login(this.loginForm);
        this.loading = !this.loading;
        if (!res) return;
        this.$store.commit("SET_USER", res.data);
        window.sessionStorage.setItem("token", res.token);
        let arr = [];
        if (this.loginForm.role === "2") {
          arr = [
            {
              id: "1",
              name: "就业事务",
              icon: "el-icon-menu",
              child: [
                {
                  id: "source",
                  name: "生源信息",
                  icon: "el-icon-s-custom",
                },
                {
                  id: "job",
                  name: "就业信息",
                  icon: "el-icon-s-cooperation",
                },
                {
                  id: "resume",
                  name: "简历管理",
                  icon: "el-icon-s-order",
                },
              ],
            },
            {
              id: "2",
              name: "个人中心",
              icon: "el-icon-menu",
              child: [
                {
                  id: "profile",
                  name: "个人资料",
                  icon: "el-icon-s-custom",
                },
                {
                  id: "admin",
                  name: "密码管理",
                  icon: "el-icon-s-goods",
                },
              ],
            },
          ];
        } else {
          arr = [
            {
              id: "1",
              name: "人员管理",
              icon: "el-icon-menu",
              child: [
                {
                  id: "users",
                  name: "用户列表",
                  icon: "el-icon-s-custom",
                },
              ],
            },
            {
              id: "2",
              name: "信息管理",
              icon: "el-icon-menu",
              child: [
                {
                  id: "backlog",
                  name: "待办列表",
                  icon: "el-icon-s-check",
                },
                {
                  id: "log",
                  name: "审批记录",
                  icon: "el-icon-s-order",
                },
              ],
            },
          ];
        }
        this.$store.commit("SET_MENUList", arr);
        return this.$router.push("/home");
      });
    },
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.querySelector("input").focus();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
// style为空全局样式就不生效
</style>
