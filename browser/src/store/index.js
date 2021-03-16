import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        user:{},
    },
    mutations:{
        SET_USER(state,data){
            state.user = data
        },
        RESET(state){
            state.user = {}
        },
        UPDATE_USER(state,data){
            Object.assign(state.user,data)
        }
    }
})

export default store