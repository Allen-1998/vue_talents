<template>
    <div>
        {{this.$store.state.user}}
    </div>
</template>

<script>
import api from "@/api/api";
    export default {
        data() {
            return {
                
            }
        },
        methods:{
            async getUserInfo(){
                const res = await api.getUserInfo()
                if (!res) return
                console.log(res,111);
            }
        },
        created(){
            // this.getUserInfo()
        }
    }
</script>

<style lang="scss" scoped>

</style>