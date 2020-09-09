<template>
<div>
    <el-menu  class="el-menu-vertical-demo" background-color="rgba(234, 237, 241, 1)" text-color="#757981" active-text-color="#1f89fe">
        <div class="title1">
            <span>历史管理</span>
        </div>
        <el-menu-item index="1" class="juzhong" @click="topath('/home/li')">
            <span>历史列表</span>
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
.box {
    height: 752px;
    box-sizing: border-box;
    background-color: rgba(234, 237, 241, 1);
}

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
