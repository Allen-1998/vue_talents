<template>
  <div class="admin pd20 bs">
    <el-form
      ref="addFormRef"
      :model="addForm"
      :rules="$rules.handle"
      label-width="100px"
      status-icon
    >
      <!-- 旧密码 -->
      <el-form-item prop="oldPassword" label="密码">
        <el-input
          v-model="addForm.oldPassword"
          prefix-icon="el-icon-lock"
          type="password"
          placeholder="请输入您的密码"
        ></el-input>
      </el-form-item>
      <!-- 新密码 -->
      <el-form-item prop="password" label="新密码">
        <el-input
          v-model="addForm.password"
          prefix-icon="el-icon-lock"
          type="password"
          placeholder="请输入新密码"
        ></el-input>
      </el-form-item>
      <!-- 二次验证密码 -->
      <el-form-item prop="rePassword" label="重复密码">
        <el-input
          type="password"
          v-model="addForm.rePassword"
          autocomplete="off"
          prefix-icon="el-icon-edit"
          placeholder="请再次输入密码"
        ></el-input>
      </el-form-item>
      <!-- 按钮区域 -->
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
        <el-button @click="init">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      addForm: {
        oldPassword: "Guo123456",
        password: "Guo1234561",
        rePassword: "Guo1234561",
      },
    };
  },
  methods: {
    //保存
    save() {
      this.$refs.addFormRef.validate( async(valid) => {
        if (!valid) return;
        const { password,rePassword,oldPassword} = this.addForm
        if (password===oldPassword) return this.$message.error("新密码与旧密码不能相同！");
        if (password!==rePassword) return this.$message.error("两次输入密码不一致！");
        const obj = {
            oldPassword,
            password
        }
        const res = await api.updateAdmin(obj);
        if (!res) return;
        this.$message.warning("请重新登录！");
        window.sessionStorage.clear()
        this.$store.commit("RESET");
        this.$router.push("login");
      });
    },
    //重置
    init() {
      this.$refs.addFormRef.resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.admin {
  height: 100%;
  overflow: auto;
  .el-form-item{
    width: 40%;
  }
}
</style>
