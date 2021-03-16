<template>
  <div class="UnCommitted">
    <Step :stepList="stepList" :active="active"></Step>
    <Tab
      ref="tab"
      :stepList="stepList"
      :active="active"
      :formList="formList"
      :formObj="formObj"
    ></Tab>
    <el-button @click="next">{{
      active !== "3" ? "下一步" : "完成"
    }}</el-button>
  </div>
</template>

<script>
import Step from "@/components/Step.vue";
import Tab from "@/components/Tab.vue";
export default {
  components: {
    Step,
    Tab,
  },
  props: {
    stepList: {
      type: Array,
      default: () => [],
    },
    formList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      active: "0",
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
        (valid) => {
          if (!valid) return;
          Object.assign(this.formData, this.formObj);
          const x = this.active * 1;
          if (x < this.stepList.length - 1) {
            this.active = x + 1 + "";
            this.$parent.getFromList(this.active);
          } else {
            this.$parent.save(this.formData);
          }
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.UnCommitted {
  height: 100%;
}
.el-button {
  margin: 15px 0;
}
</style>
