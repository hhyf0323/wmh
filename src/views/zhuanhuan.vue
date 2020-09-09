<template>
  <div>
    <div>{{mm | nn}}</div>
  </div>
</template>

<script>
  export default {
  	data() {
  		return {
        mm:"nnn",
      }
     },
     filters:{
     	nn(val){
     		return val.charAt(0).toUpperCase()+val.slice(1)
     	}
     },
   }
</script>

<style>
</style>
