<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" v-show="$route.meta.childTitle">
      <el-breadcrumb-item :to="{ path: 'welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.meta.parentTitle}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.meta.childTitle}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
</style>