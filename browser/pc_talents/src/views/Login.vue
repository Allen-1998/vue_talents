<template>
  <div id="container">
    <img src="~assets/logo.png" @click="home" />
    <h3>Sign in to Talents</h3>
    <el-card>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        status-icon
        v-loading="loading"
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
        <el-form-item>
          <el-link type="primary" :underline="false">忘记密码</el-link>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item>
          <el-button type="success" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-button @click="register">New to Talents? Creat an account.</el-button>
  </div>
</template>

<script>
export default {
  data() {
    //验证用户名规则
    const checkUsername = (rule, value, callback) => {
      const regUsername = /^[A-Za-z]{1}[A-Za-z0-9]{2,9}/;
      if (regUsername.test(value)) {
        //合法用户名
        return callback();
      }
      callback(new Error("需以字母开头，字母数字组合3~10长度"));
    };
    //验证密码
    const validatePassword = (rule, value, callback) => {
      const regPass = /^(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
      if (!regPass.test(value)) {
        //不合法密码
        return callback(new Error("需包含大小写字母数字，8~15长度"));
      }
      return callback();
    };
    return {
      loading: false,
      loginForm: {
        username: "test7",
        password: "Guo123456",
      },
      loginFormRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "需以字母开头，字母数字组合3~10长度",
            trigger: "blur",
          },
          {
            validator: checkUsername,
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            validator: validatePassword,
            trigger: "blur",
          },
        ],
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
        //可发起登录网络请求
        const { data: res } = await this.$http.post(
          "user/login",
          this.loginForm
        );
        this.loading = !this.loading;
        // console.log(res);
        if (!res) return;
        this.$router.push("/index");
        window.sessionStorage.setItem("token", res.token);
        return this.$message.success(res.message);
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

<style lang="less" scoped>
#container {
  text-align: center;
  width: 350px;
  margin: 30px auto;
  img {
    width: 70px;
  }
  .el-card {
    padding: 30px 30px 0 30px;
  }
  .el-button {
    width: 100%;
    margin-top: 15px;
  }
  .el-link {
    float: right;
    top: -15px;
  }
}
</style>
