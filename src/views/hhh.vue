<template>
  <div>
   <div>
     输入：<input type="text" v-model="message"></br>
     反转：{{reversedMessage}}
   </div>

  </div>
</template>

<script>
  export default {
    data(){
      message:''
    },
    computed:{
      reversedMessage:function(){
        return this.message.split('').reverse().join()
      }
    }
  }
</script>

<style>
</style>
