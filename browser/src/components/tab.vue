<template>
  <div class="tab">
    <el-tabs
      tab-position="left"
      v-model="active"
    >
      <el-tab-pane
        v-for="(item,index) in stepList"
        :key="index"
        :name="item.id"
        :label="item.val"
        disabled
      >
        <Form
          ref="form"
          :formList='formList'
          :formObj='formObj'
        ></Form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Form from "@/components/form.vue";
export default {
  components: {
    Form,
  },
  props: {
    stepList: {
      type: Array,
      default: ()=> [],
    },
    active: {
      type: String,
      default: "0",
    },
    formList: {
      type: Array,
      default: ()=> [],
    },
    formObj: {
      type: Object,
      default: ()=> {},
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  height: calc(100% - 140px);
}

.el-tabs {
  height: 100%;
}

/deep/.el-tabs__content {
  height: 100%;
}

/deep/.el-tabs__item.is-disabled {
  color: #303133;
  cursor: default;
}

/deep/.el-tabs__item.is-active {
  color: #409eff;
}

.el-tab-pane {
  height: 100%;
  overflow: auto;
}
</style>