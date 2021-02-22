<template>
  <div class="home flex">
    <div class="header bd">
      <el-row>
        <el-col
          :span="12"
          :offset="6"
          class="ft18"
        >{{title}}</el-col>
        <el-col
          :span="3"
          class="ellipsis"
        >hi,{{user.username}}</el-col>
        <el-col :span="3">
          <el-button
            type="info"
            round
            @click="logout"
          >退出</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="container pd20 flex">
      <input
        type="checkbox"
        id="toggler"
      >
      <label for="toggler">
        <div class="menu-icon cursor"></div>
      </label>
      <div class="aside bd bg mr15">
        <Menu :menuList="menuList"></Menu>
      </div>
      <div class="main bd bg pd40">
        <Breadcrumb></Breadcrumb>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/menu.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
export default {
  components: {
    Menu,
    Breadcrumb,
  },
  data() {
    return {
      title: "人才信息管理系统",
      user: this.$store.state.user,
      menuList: [
        {
          id: "1",
          name: "就业事务",
          icon: "el-icon-menu",
          child: [
            {
              id: "source",
              name: "生源信息",
              icon: "el-icon-s-custom",
            },
            {
              id: "job",
              name: "就业信息",
              icon: "el-icon-s-cooperation",
            },
            {
              id: "resume",
              name: "简历管理",
              icon: "el-icon-s-order",
            },
          ],
        },
        {
          id: "2",
          name: "个人中心",
          icon: "el-icon-menu",
          child: [
            {
              id: "profile",
              name: "个人资料",
              icon: "el-icon-s-custom",
            },
            {
              id: "admin",
              name: "密码管理",
              icon: "el-icon-s-goods",
            },
          ],
        },
      ],
    };
  },
  methods: {
    async logout() {
      //弹框询问用户是否退出
      const confirmResult = await this.$confirm("您真的要狠心离开吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).catch((err) => err);
      //如果用户确认,则返回值为字符串confirm
      //如果用户取消，则返回值为字符串cancel
      if (confirmResult === "confirm") {
        window.sessionStorage.removeItem("token");
        this.$store.commit("RESET");
        this.$router.push("login");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
}

.header {
  width: 100vw;
  height: 60px;
  line-height: 60px;
  border-radius: 0 0 35px 35px;
  border-top: 0;
  color: #666;
  background: rgb(180, 180, 180);
}

.container {
  width: 100vw;
  height: calc(100vh - 60px);
  box-sizing: border-box;
}

.aside {
  z-index: 100;
  width: 200px;
  height: 100%;
  overflow: hidden;
}

.main {
  width: calc(100% - 200px);
  height: 100%;
}

#toggler {
  display: none;
}

.menu-icon {
  display: none;
  z-index: 100;
  position: absolute;
  top: 20px;
  left: 50px;
  width: 35px;
  height: 20px;
  &::before,
  &::after {
    content: "";
    width: 35px;
    height: 5px;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
  }
  &::after {
    top: 15px;
  }
}

#toggler:checked + label .menu-icon {
  &::before,
  &::after {
    top: 10px;
    transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
    transform: rotate(40deg);
  }
  &::after {
    transform: rotate(-40deg);
  }
}

#toggler:checked ~ .aside {
    transform: scaleY(1);
}

@media screen and (max-width: 768px) {
  .aside {
    height: auto;
    border: 0;
    border-radius: 35px;
    overflow: hidden;
    position: absolute;
    top: 60px;
    left: 0;
    transform: scaleY(0);
    transform-origin: 50% 0;
    transition: transform 0.3s ease-in-out;
  }
  .menu-icon {
    display: block;
  }
  .main {
    width: calc(100% - 40px);
  }
}
</style>