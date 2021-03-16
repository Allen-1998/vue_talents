<template>
  <div class="Job">
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
      formList: [],
    };
  },
  methods: {
    //判断是否已提交
    async getList() {
      const res = await api.findJob();
      if (!res) return;
      console.log(res);
      if (res.data) {
        this.list = res.data;
        this.isCommit = true;
      } else {
        this.getStepList();
        this.getFromList("0");
      }
    },
    //获取标签页
    getStepList() {
      this.stepList = [
        { id: "0", val: "单位信息" },
        { id: "1", val: "报到证信息" },
        { id: "2", val: "档案信息" },
        { id: "3", val: "户口信息" },
      ];
    },
    //获取表单列表
    getFromList(i) {
      switch (i) {
        case "0":
          this.formList = [
            {
              label: "就业单位名称",
              prop: "companyName",
              companyName: "",
              type: "input",
              required: true,
            },
            {
              label: "社会信用代码",
              prop: "socialCode",
              socialCode: "",
              type: "input",
              required: true,
            },
            {
              label: "单位性质",
              prop: "companyType",
              companyType: "",
              type: "input",
              required: true,
            },
            {
              label: "单位行业",
              prop: "industry",
              industry: "",
              type: "input",
              required: true,
            },
            {
              label: "单位所在地",
              prop: "companyAddress",
              companyAddress: "",
              type: "input",
              required: true,
            },
            {
              label: "单位联系人",
              prop: "companyContact",
              companyContact: "",
              type: "input",
              required: true,
            },
            {
              label: "联系人电话",
              prop: "companyNumber",
              companyNumber: "",
              type: "input",
              required: true,
            },
            {
              label: "联系人email",
              prop: "companyEmail",
              companyEmail: "",
              type: "input",
            },
            {
              label: "薪资",
              prop: "pay",
              pay: "",
              type: "input",
            },
          ];
          break;
        case "1":
          this.formList = [
            {
              label: "报到证签发类别",
              prop: "certificateType",
              certificateType: "",
              type: "input",
              required: true,
            },
            {
              label: "报到证编号",
              prop: "certificateNo",
              certificateNo: "",
              type: "input",
            },
            {
              label: "报到证起始时间",
              prop: "certificateTime",
              certificateTime: "",
              type: "date",
            },
            {
              label: "签往单位名称",
              prop: "certificateUnit",
              certificateUnit: "",
              type: "input",
              required: true,
            },
            {
              label: "签往单位所在地",
              prop: "certificateUnitLocation",
              certificateUnitLocation: "",
              type: "input",
              required: true,
            },
            {
              label: "签往单位地址",
              prop: "certificateUnitAddress",
              certificateUnitAddress: "",
              type: "input",
            },
          ];
          break;
        case "2":
          this.formList = [
            {
              label: "转寄单位名称",
              prop: "recordUnit",
              recordUnit: "",
              type: "input",
              required: true,
            },
            {
              label: "转寄单位联系人",
              prop: "recordUnitContact",
              recordUnitContact: "",
              type: "input",
            },
            {
              label: "转寄单位电话",
              prop: "recordUnitPhone",
              recordUnitPhone: "",
              type: "input",
            },
            {
              label: "转寄单位邮编",
              prop: "recordUnitPostcode",
              recordUnitPostcode: "",
              type: "input",
              required: true,
            },
            {
              label: "转寄单位地址",
              prop: "recordUnitAddress",
              recordUnitAddress: "",
              type: "input",
            },
          ];
          break;
        case "3":
          this.formList = [
            {
              label: "户口迁转单位",
              prop: "accountUnit",
              accountUnit: "",
              type: "input",
            },
            {
              label: "户口迁转地址",
              prop: "accountAddress",
              accountAddress: "",
              type: "input",
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
      const res = await api.saveJob(data);
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
.Job {
  height: 100%;
}
</style>
