<template>
<el-menu  class="el-menu-vertical-demo" background-color="rgba(234, 237, 241, 1)" text-color="#757981" active-text-color="#1f89fe">
    <div class="title1">
        <span>客服管理</span>
    </div>
    <el-menu-item index="/index/level2?type=1" class="juzhong"  @click="topath('/home/klist')">
        <span>客服列表</span>
    </el-menu-item>
    <el-menu-item index="2" class="juzhong" @click="topath('/home/xiao')">
        <span slot="title">客服小组</span>
    </el-menu-item>
</el-menu>
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
