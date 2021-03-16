<template>
  <div class="Source">
    <Committed v-if="isCommit" :list="list"></Committed>
    <UnCommitted :stepList="stepList" :formList="formList" v-else></UnCommitted>
  </div>
</template>

<script>
import Committed from "@/components/Committed";
import UnCommitted from "@/components//UnCommitted";
import api from "@/api/api";
export default {
  components: {
    Committed,
    UnCommitted,
  },
  data() {
    return {
      //是否已经填写
      isCommit: false,
      //数据列表
      list: {},
      //标签页
      stepList: [],
      //表单列表
      formList:[]
    };
  },
  methods: {
    //判断是否已提交
    async getList() {
      const res = await api.findSource();
      if (!res) return;
      console.log(res);
      if (res.data) {
        this.list = res.data;
        this.isCommit = true;
      }else{
        this.getStepList()
        this.getFromList('0')
      }
    },
    //获取标签页
    getStepList() {
      this.stepList = [
        { id: "0", val: "基本信息" },
        { id: "1", val: "学籍信息" },
        { id: "2", val: "联系方式" },
        { id: "3", val: "档案信息" },
      ];
    },
    //获取表单列表
    getFromList(i) {
      switch (i) {
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
            },
            {
              label: "微信",
              prop: "wx",
              wx: "",
              type: "input",
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
              prop: "homePhone",
              homePhone: "",
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
    //提交表单
    async save(data){
      const res = await api.saveSource(data);
      if (!res) return;
      console.log(data);
    }
  },
  created() {
    this.getList();
  },
};
</script>
<style lang="scss" scoped>
.Source {
  height: 100%;
}
</style>
