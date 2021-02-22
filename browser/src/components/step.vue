<template>
  <div>
    <el-steps
      :active="active - 0"
      finish-status="success"
      align-center
    >
      <el-step
        v-for="(item,index) in stepList"
        :key="index"
        :title="item.val"
      ></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  props: {
    stepList: {
      type: Array,
      default: ()=> [],
    },
    active: {
      type:String,
      default:'0'
    }
  },
};
</script>
<style lang="scss" scoped>
.el-steps {
  margin-top: 15px;
}

/deep/ .el-step__title {
  font-size: 12px;
}

/deep/.el-step__icon {
  width: 20px;
  height: 20px;
}

/deep/.el-step__icon-inner {
  font-size: 10px;
}
</style>