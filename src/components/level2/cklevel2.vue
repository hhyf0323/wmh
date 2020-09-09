<template>
<div>
    <el-menu default-active="1" class="el-menu-vertical-demo" background-color="rgba(234, 237, 241, 1)" text-color="#757981" active-text-color="#1f89fe">
        <div class="title1">
            <span>系统首页</span>
        </div>
        <el-menu-item index="1" class="juzhong" @click="topath('/home/about')">
            <span slot="title">系统首页</span>
        </el-menu-item>
        <el-menu-item index="2" class="juzhong" @click="topath('/home/zi')">
            <span slot="title">个人资料设置</span>
        </el-menu-item>
        <el-menu-item index="3" class="juzhong" @click="topath('/home/info')">
            <span slot="title">消息中心</span>
        </el-menu-item>
        <el-menu-item index="5" class="juzhong" @click="topath('/home/deng')">
            <span slot="title">登录日志</span>
        </el-menu-item>

    </el-menu>
</div>
</template>

<script>
export default {
methods:{
  topath(path){
    this.$router.push(path)
  }
}
}
</script>

<style scoped>
.is-active {
    background-color: white !important;
}

.title1 {
    color: #757981;
    background-color: whitesmoke;
    text-align: center;
    padding: 20px 0;
}

.juzhong {
    text-align: center;
    border-bottom: 1px solid gainsboro;
}
</style>
