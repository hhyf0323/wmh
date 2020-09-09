<template>
<el-menu  class="el-menu-vertical-demo" background-color="rgba(234, 237, 241, 1)" text-color="#757981" active-text-color="#1f89fe">
    <div class="title1">
        <span>权限管理</span>
    </div>
    <el-menu-item index="/index/level2?type=1" class="juzhong" @click="topath('/home/jue')">
        <span>角色管理</span>
    </el-menu-item>
    <el-menu-item index="2" class="juzhong" @click="topath('/home/cheng')">
        <span slot="title">成员管理</span>
    </el-menu-item>
    <el-menu-item index="3" class="juzhong" @click="topath('/home/jshuo')">
        <span slot="title">角色说明</span>
    </el-menu-item>
    <el-menu-item index="4" class="juzhong" @click="topath('/home/cao')">
        <span slot="title">操作日志</span>
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
