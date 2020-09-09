<template>
  <div>
    <input type="text" placeholder="请输入账号" v-model="yf"><br/>
    <input type="password" placeholder="请输入密码" v-model="baby"></br>
    <button @click="denglu()">登录</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        yf: '',
        baby: ''
      }
    },
    methods: {
      denglu() {
        axios({
          url: 'http://139.9.169.87:8081/examsystem/login',
          method: 'post',
          params: {
            username: this.yf,
            password: this.baby
          }
        })
        .then(dd =>{
          if(dd.data.success=='true'){
            window.sessionStorage.aa=true
            this.$router.push('/jk')
            alert("登录成功")
          }else{
            alert("登录失败")
          }
        })
      }
    }
  }
</script>

<style>
</style>
