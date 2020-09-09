<template>
  <div>
    <div>
      <button @click="show">单击事件</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      show() {
        this.$emit('show', 'aa')
      }
    }

  }
</script>

<style>
</style>
