<template>
  <div class="home">
    <mian-header></mian-header>
    <div style="display: flex;">
      <div style="width: 17%; height: 1072px; background: #545c64;">
        <el-row class="tac">
          <el-col :span="2">
            <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
              active-text-color="#ccc">
              <el-menu-item index="2" @click="type=1">
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="3" @click="type=2">
                <span>统计</span>
              </el-menu-item>
              <el-menu-item index="4" @click="type=3">
                <span>客服</span>
              </el-menu-item>
              <el-menu-item index="5" @click="type=4">
                <span>历史</span>
              </el-menu-item>
              <el-menu-item index="6" @click="type=5">
                <span>客户</span>
              </el-menu-item>
              <el-menu-item index="7" @click="type=6">
                <span>公告</span>
              </el-menu-item>
              <el-menu-item index="8" @click="type=7">
                <span>知识</span>
              </el-menu-item>
              <!-- <el-menu-item index="9" @click="type=8">
                <span>对话</span>
              </el-menu-item> -->
              <el-menu-item index="10" @click="type=9">
                <span>权限</span>
              </el-menu-item>
              <el-menu-item index="11" @click="type=10">
                <span>设置</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        <el-col :span="3" class="level2">
            <level2 :type="type"></level2>
        </el-col>
        </el-row>
      </div>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import mianHeader from '@/components/Home/mianHeader'
  import level2 from '../components/level2/level2.vue'
  export default {
    data (){
      return {
        type:1
      }
    },
    components: {
      mianHeader,
      level2
    }
  }
</script>
<style scoped>
  .el-row {
    text-align: center;
  }
  .level2{
    height: 1072px;
    background-color: #eaedf1;
  }
</style>
<style>
  .home .el-col-2{
    width: 30%;
  }
  .home .el-col-3{
    width: 70%;
  }
</style>
