<template>
<el-menu  class="el-menu-vertical-demo" background-color="rgba(234, 237, 241, 1)" text-color="#757981" active-text-color="#1f89fe">
    <div class="title1">
        <span>对话平台</span>
    </div>
    <el-menu-item index="/index/level2?type=1" class="juzhong">
        <span>当前对话</span>
    </el-menu-item>
    <el-menu-item index="2" class="juzhong">
        <span slot="title">呼叫中心</span>
    </el-menu-item>
    <el-menu-item index="3" class="juzhong">
        <span slot="title">留言管理</span>
    </el-menu-item>
    <el-menu-item index="4" class="juzhong">
        <span slot="title">工单管理</span>
    </el-menu-item>
    <el-menu-item index="5" class="juzhong">
        <span slot="title">发布工单</span>
    </el-menu-item>
</el-menu>
</template>

<script>
export default {

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
