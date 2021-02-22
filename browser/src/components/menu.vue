<template>
  <div>
    <el-menu
      router
      :default-openeds="['1','2']"
      :default-active="this.$route.path.substr(1)"
    >
      <el-submenu
        v-for="(item,index) in menuList"
        :key="index"
        :index="item.id"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          {{item.name}}
        </template>
        <el-menu-item
          v-for="(subitem,i) in item.child"
          :key="i"
          :index="subitem.id"
        >
          <i :class="subitem.icon"></i>
          {{subitem.name}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
      default: ()=> [],
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-submenu__title {
  padding: 0 50px;
}
</style>