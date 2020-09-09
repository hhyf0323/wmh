<template>
  <div>
    <hh @show="show"></hh>
  </div>
</template>

<script>
  import hh from 'ca.vue'
  export default {
    components: {
      hh
    },
    methods: {
      show(val) {
        alert(val)
      }
    }

  }
</script>

<style>
</style>
