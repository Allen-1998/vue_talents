<template>
  <div class="loginContainer">
    <img src="~@img/logo.png" @click="home" />
    <h3>{{title}}</h3>
    <el-card>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="$rules.common"
        status-icon
        v-loading="loading"
      >
        <!-- 用户名 -->
        <el-form-item prop="username" >
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
          <el-radio v-model="role" label="user">用户</el-radio>
          <el-radio v-model="role" label="admin">管理员</el-radio>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item>
          <el-button type="success" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-button @click="register">{{msg}}</el-button>
  </div>
</template>

<script>
import api from '@/api/api';
export default {
  data() {
    return {
      role: "user",
      loading: false,
      title:'Sign in to Talents',
      msg:'New to Talents? Creat an account.',
      loginForm: {
        username: "test1",
        password: "Guo123456",
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
        const res = await api.login(this.role,this.loginForm)
        this.loading = !this.loading;
        if (res.type === 'error') return;
        window.sessionStorage.setItem("token", res.token);
        this.$message.success(res.message);
        if (this.role === "user") {
          return this.$router.push("/userHome");
        }
        return this.$router.push("/index");
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
@import "@css/variable.scss";
</style>
