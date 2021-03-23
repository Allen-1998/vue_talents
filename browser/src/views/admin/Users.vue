<template>
  <div class="Users">
    <el-input
      placeholder="输入用户名关键字进行检索"
      prefix-icon="el-icon-search"
      size="small"
      v-model="param.username"
      @input="search"
      clearable
    >
    </el-input>
    <div class="users-table">
      <el-table :data="tableData" height="100%" style="width: 100%">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column
          prop="username"
          width="100"
          show-overflow-tooltip
          label="用户名"
        >
        </el-table-column>
        <el-table-column
          prop="nickname"
          width="100"
          show-overflow-tooltip
          label="昵称"
        >
        </el-table-column>
        <el-table-column width="70" v-slot="scope" label="性别">
          {{ scope.row.sex | formatRadio("sex") }}
        </el-table-column>
        <el-table-column
          prop="email"
          width="150"
          show-overflow-tooltip
          label="电子邮箱"
        >
        </el-table-column>
        <el-table-column width="200" v-slot="scope" label="注册日期">
          {{ scope.row.date | formatSecond }}
        </el-table-column>
        <el-table-column width="120" v-slot="scope" label="状态">
          <el-switch
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="0"
            active-color="#13ce66"
            inactive-color="#999"
            @click.native="changeStatus(scope.row._id, scope.row.status)"
          >
          </el-switch>
        </el-table-column>
        <el-table-column prop="introduction" show-overflow-tooltip label="简介">
        </el-table-column>
        <el-table-column width="150" label="操作">
          <el-button type="primary" size="mini">查看</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="users-pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="param.page"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="param.limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="param.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      tableData: [],
      param: {
        page: 1,
        limit: 10,
        username: "",
        total: 0,
      },
    };
  },
  methods: {
    async getList() {
      const res = await api.getUsers(this.param);
      if (!res) return;
      this.tableData = res.data.list;
      this.param.total = res.data.total;
    },
    handleSizeChange(val) {
      this.param.limit = val;
      this.param.page = 1;
      this.getList();
    },
    handleCurrentChange(val) {
      this.param.page = val;
      this.getList();
    },
    search() {
      this.param.page = 1;
      this.getList();
    },
    async changeStatus(id, status) {
      const res = await api.changeStatus({ id, status });
      if (!res)
        return (this.tableData.find((i) => i._id === id).status = +!status);
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style lang="scss">
.el-tooltip__popper {
  max-width: 200px;
  line-height: 20px;
}
</style>
<style lang="scss" scoped>
.Users {
  height: 100%;
  .users-table {
    height: calc(100% - 73px);
  }
  .users-pagination {
    margin-top: 40px;
  }
}
.el-input {
  width: 300px;
  float: left;
}
</style>
