<template>
    <div class="home flex">
        <div class="header bd">
            <el-row>
                <el-col :span="12" :offset="6" class="ft18">{{title}}</el-col>
                <el-col :span="3" class="ellipsis">hi,{{user.username}}</el-col>
                <el-col :span="3"><el-button type="info" round @click="logout">退出</el-button></el-col>
            </el-row>
        </div>
        <div class="container pd20 flex">
            <div class="aside bd bg mr15">
                <Menu :menuList="menuList" ref="menu"></Menu>
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
                title:'人才信息管理系统',
                user:this.$store.state.user,
                menuList:[
                    {
                        id:'1',
                        name:'就业事务',
                        icon:'el-icon-menu',
                        child:[
                            {
                                id:'source',
                                name:'生源信息',
                                icon:'el-icon-s-custom',
                            },
                            {
                                id:'job',
                                name:'就业信息',
                                icon:'el-icon-s-cooperation',
                            },
                            {
                                id:'resume',
                                name:'简历管理',
                                icon:'el-icon-s-order',
                            }
                        ]
                    },
                    {
                        id:'2',
                        name:'个人中心',
                        icon:'el-icon-menu',
                        child:[
                            {
                                id:'profile',
                                name:'个人资料',
                                icon:'el-icon-s-custom',
                            },
                            {
                                id:'admin',
                                name:'密码管理',
                                icon:'el-icon-s-goods',
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            async logout(){
                //弹框询问用户是否退出
                const confirmResult = await this.$confirm(
                    "您真的要狠心离开吗?",
                    "提示",
                    {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                    }
                ).catch((err) => err);
                //如果用户确认,则返回值为字符串confirm
                //如果用户取消，则返回值为字符串cancel
                if (confirmResult === "confirm") {
                    window.sessionStorage.removeItem('token')
                    this.$store.commit('RESET')
                    this.$router.push('login')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
//
</style>