<template>
  <div class="Profile">
    <Form ref="form" :formList="formList" :formObj="formObj"></Form>
    <div class="Profile-btn">
      <el-button type="primary" @click="save">保存</el-button>
      <el-button @click="init">重置</el-button>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import api from "@/api/api";
export default {
  components: {
    Form,
  },
  data() {
    return {
      //表单列表
      formList: [],
    };
  },
  computed: {
    formObj() {
      let obj = {};
      this.formList.forEach((i) => {
        obj[i.prop] = i[i.prop];
      });
      return obj;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    //获取列表
    getFromList() {
      let user = this.user;
      this.formList = [
        {
          label: "用户名",
          prop: "username",
          username: user.username,
          type: "input",
          disabled: true,
        },
        {
          label: "昵称",
          prop: "nickname",
          nickname: user.nickname,
          type: "input",
          placeholder: "请输入您的昵称",
        },
        {
          label: "性别",
          prop: "sex",
          sex: user.sex,
          type: "radio",
        },
        {
          label: "邮箱",
          prop: "email",
          email: user.email,
          type: "input",
          placeholder: "请输入邮箱",
        },
        {
          label: "个人简介",
          prop: "introduction",
          introduction: user.introduction,
          type: "textarea",
          placeholder: "请输入个人简介",
        },
      ];
    },
    //保存
    save() {
      this.$refs.form.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return;
        const res = await api.updateProfile(this.formObj);
        if (!res) return;
        this.$store.commit('UPDATE_USER',this.formObj)
      });
    },
    //重置
    init() {
      this.getFromList();
      this.$refs.form.$refs.addFormRef.resetFields();
    },
  },
  created() {
    this.getFromList();
  },
};
</script>

<style lang="scss" scoped>
.Profile {
  padding: 20px 0;
  .Profile-btn {
    margin-left: 150px;
    width: 50%;
  }
}
</style>
