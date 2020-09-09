<template>
  <div>
    <p>{{hh}}</p>
    <button @click="daojishi">开始</button>

  </div>
</template>

<script>
  export default{
    methods:{
      daojishi(){
        this.timer = setInterval(() =>{
          this.hh--;
        },1000)
      }
    },
    data(){
      return{
        hh:100
      }
    }
  }
</script>

<style>
</style>
