<template>
  <div class="Source">
    <Step
      :stepList="stepList"
      :active='active'
    ></Step>
    <Tab
      ref="tab"
      :stepList="stepList"
      :active='active'
      :formList='formList'
      :formObj='formObj'
    ></Tab>
    <el-button @click="next">{{ active!=='3' ? '下一步' : '完成' }}</el-button>
  </div>
</template>

<script>
import Step from "@/components/step.vue";
import Tab from "@/components/tab.vue";
export default {
  components: {
    Step,
    Tab,
  },
  data() {
    return {
      active: "0",
      stepList: [
        { id: "0", val: "基本信息" },
        { id: "1", val: "学籍信息" },
        { id: "2", val: "联系方式" },
        { id: "3", val: "档案信息" },
      ],
      //表单列表
      formList: [],
      //要提交的表单对象
      formData: {},
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
  },
  methods: {
    //下一步
    next() {
      this.$refs.tab.$refs.form[this.active * 1].$refs.addFormRef.validate(
        async (valid) => {
          if (!valid) return;
          Object.assign(this.formData, this.formObj);
          if (this.active !== '3') {
            this.active = this.active * 1 + 1 + "";
            this.getFromList();
          }else{
            console.log(this.formData);
          }
        }
      );
    },
    //获取列表
    getFromList() {
      switch (this.active) {
        case "0":
          this.formList = [
            {
              label: "姓名",
              prop: "name",
              name: "",
              type: "input",
              required: true,
            },
            {
              label: "性别",
              prop: "sex",
              sex: "1",
              type: "radio",
              required: true,
            },
            {
              label: "身份证号",
              prop: "idCardNo",
              idCardNo: "",
              type: "input",
              required: true,
            },
            {
              label: "出生日期",
              prop: "birth",
              birth: "",
              type: "date",
              required: true,
            },
            {
              label: "政治面貌",
              prop: "politics",
              politics: "",
              type: "input",
              required: true,
            },
            {
              label: "民族",
              prop: "nation",
              nation: "",
              type: "input",
              required: true,
            },
            {
              label: "生源所在地",
              prop: "domicile",
              domicile: "",
              type: "input",
              required: true,
            },
          ];
          break;
        case "1":
          this.formList = [
            {
              label: "毕业院校",
              prop: "schoolName",
              schoolName: "",
              type: "input",
              required: true,
            },
            {
              label: "学历",
              prop: "education",
              education: "",
              type: "input",
              required: true,
            },
            {
              label: "所在院系",
              prop: "department",
              department: "",
              type: "input",
              required: true,
            },
            {
              label: "专业班级",
              prop: "major",
              major: "",
              type: "input",
              required: true,
            },
            {
              label: "学号",
              prop: "studentId",
              studentId: "",
              type: "input",
              required: true,
            },
            {
              label: "就读时间",
              prop: "studyingTime",
              admissionDate: "",
              type: "daterange",
              required: true,
            },
            {
              label: "学习形式",
              prop: "studyMode",
              studyMode: "",
              type: "input",
              required: true,
            },
            {
              label: "学制",
              prop: "educationalSystem",
              educationalSystem: "",
              type: "input",
              required: true,
            },
            {
              label: "专业方向",
              prop: "professional",
              professional: "",
              type: "input",
              required: true,
            },
            {
              label: "培养方式",
              prop: "trainingMode",
              trainingMode: "",
              type: "input",
              required: false,
            },
          ];
          break;
        case "2":
          this.formList = [
            {
              label: "手机号码",
              prop: "phone",
              phone: "",
              type: "input",
              required: true,
            },
            {
              label: "QQ",
              prop: "qq",
              qq: "",
              type: "input",
              required: false,
            },
            {
              label: "微信",
              prop: "wx",
              wx: "",
              type: "input",
              required: false,
            },
            {
              label: "电子邮箱",
              prop: "email",
              email: "",
              type: "input",
              required: true,
            },
            {
              label: "紧急联系人",
              prop: "emergencyContact",
              emergencyContact: "",
              type: "input",
              required: true,
            },
            {
              label: "家庭电话",
              prop: "phone",
              phone: "",
              type: "input",
              required: true,
            },
            {
              label: "家庭地址",
              prop: "address",
              address: "",
              type: "input",
              required: true,
            },
            {
              label: "家庭邮编",
              prop: "postcode",
              postcode: "",
              type: "input",
              required: false,
            },
          ];
          break;
        case "3":
          this.formList = [
            {
              label: "档案是否转入学校",
              prop: "record",
              record: "1",
              type: "radio",
              required: true,
            },
            {
              label: "户口是否转入学校",
              prop: "account",
              account: "1",
              type: "radio",
              required: true,
            },
            {
              label: "入学前档案所在单位",
              prop: "unit",
              unit: "",
              type: "input",
              required: true,
            },
            {
              label: "入学前户口所在地",
              prop: "policeStation",
              policeStation: "",
              type: "input",
              required: true,
            },
          ];
          break;
        default:
          this.formList = [];
          break;
      }
    },
  },
  created() {
    this.getFromList();
  },
};
</script>
<style lang="scss" scoped>
.Source {
  height: 100%;
}
.el-button {
  margin-top: 15px;
}
</style>
