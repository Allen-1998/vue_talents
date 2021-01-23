<template>
  <div class="loginContainer">
    <img
      src="~@img/logo.png"
      @click="home"
    />
    <h3>{{title}}</h3>
    <el-card>
      <!-- 注册表单区域 -->
      <el-form
        ref="addFormRef"
        :model="addForm"
        :rules="$rules.common"
        status-icon
        v-loading="loading"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="addForm.username"
            prefix-icon="el-icon-user"
            placeholder="设置用户名"
            v-focus
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="addForm.password"
            prefix-icon="el-icon-lock"
            type="password"
            placeholder="设置您的登录密码"
          ></el-input>
        </el-form-item>
        <!-- 二次验证密码 -->
        <el-form-item prop="rePassword">
          <el-input
            type="password"
            v-model="addForm.rePassword"
            autocomplete="off"
            prefix-icon="el-icon-edit"
            placeholder="请再次输入您的密码"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item>
          <el-button
            type="success"
            @click="register"
          >提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-button @click="login">{{msg}}</el-button>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      loading: false,
      title: "Sign up to Talents",
      msg: "Return to login page.",
      addForm: {
        username: "",
        password: "",
        rePassword: "",
        nickName: "", // 昵称
      },
    };
  },
  methods: {
    home() {
      this.$router.push("/index");
    },
    login() {
      this.$router.push("/login");
    },
    //点击按钮提交表单
    register() {
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return;
        const { password, rePassword } = this.addForm;
        if (password !== rePassword)
          return this.$message.error("两次输入密码不一致！");
        this.loading = !this.loading;
        //可发起注册网络请求
        const res = await api.register(this.addForm);
        this.loading = !this.loading;
        if (!res) return;
        this.$message.success(res.message);
        return this.$router.push("/login");
      });
    },
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.querySelector("input").focus();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@css/variable.scss";
</style>
