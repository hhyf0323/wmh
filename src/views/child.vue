<template>
    <div @click="chuan()">
        子组件
        {{ child }}
    </div>
</template>
<script>
export default {
    props:['child'],
    methods:{
        chuan(){
            this.$emit('cbscasi','这是传给父组件的值')
        }
    }
}
</script>