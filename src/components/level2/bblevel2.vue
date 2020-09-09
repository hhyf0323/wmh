<template>
  <div>
    <el-menu default-active="1level2" class="el-menu-vertical-demo" background-color="rgba(234, 237, 241, 1)"
      text-color="#757981" active-text-color="#1f89fe">
      <div class="title1">
        <span>统计分析</span>
      </div>
      <el-menu-item index="1" class="juzhong" @click="topath('/home/zong')">
        <span>总览统计</span>
      </el-menu-item>
      <el-menu-item index="2" class="juzhong" @click="topath('/home/ke')">
        <span slot="title">客服统计</span>
      </el-menu-item>
      <el-menu-item index="3" class="juzhong" @click="topath('/home/liu')">
        <span slot="title">留言统计</span>
      </el-menu-item>
      <el-menu-item index="5" class="juzhong" @click="topath('/home/ji')">
        <span slot="title">机器人统计</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
  export default {
    methods: {
      topath(path) {
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
