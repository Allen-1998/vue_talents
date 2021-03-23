import Vue from "vue";
import Vuex from "vuex";

//挂载Vuex
Vue.use(Vuex);

//创建VueX对象
const store = new Vuex.Store({
  state: {
    //存放的键值对就是所要管理的状态
    user: {},
    menuList: [],
    menus: ["welcome", "login", "register", "404"],
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    },
    RESET(state) {
      state.user = {};
      state.menuList = [];
      state.menus = ["welcome", "login", "register", "404"];
    },
    UPDATE_USER(state, data) {
      Object.assign(state.user, data);
    },
    SET_MENUList(state, data) {
      state.menuList = data;
      this.commit("SET_MENUS", data);
    },
    SET_MENUS(state, data) {
      data.forEach((i) => {
        i.child.forEach((x) => {
          state.menus.push(x.id);
        });
      });
    },
  },
});

export default store;
