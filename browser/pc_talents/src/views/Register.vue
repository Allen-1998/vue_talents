<template>
  <div id="container">
    <img src="~assets/logo.png" @click="home" />
    <h3>Sign up to Talents</h3>
    <el-card>
      <!-- 注册表单区域 -->
      <el-form
        ref="addFormRef"
        :model="addForm"
        :rules="addFormRules"
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
          <el-button type="success" @click="register">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-button @click="login">Return to login page.</el-button>
    <!-- <el-button @click="login">New to Talents? Creat an account.</el-button> -->
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
      if (
        this.addForm.password !== "" &&
        this.addForm.rePassword !== "" &&
        this.addForm.password !== this.addForm.rePassword
      ) {
        return callback(new Error("两次输入密码不一致"));
      }
      return callback();
    };
    return {
      loading: false,
      addForm: {
        username: "",
        password: "",
        rePassword: "",
        nickName: "", // 昵称
      },
      addFormRules: {
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
        rePassword: [
          {
            required: true,
            message: "请再次输入密码",
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
    login() {
      this.$router.push("/login");
    },
    //点击按钮提交表单
    register() {
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return;
        this.loading = !this.loading;
        //可发起注册网络请求
        const { data: res } = await this.$http.post(
          "user/register",
          this.addForm
        );
        this.loading = !this.loading;
        if (!res) return;
        this.$router.push("/login");
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
}
</style>
