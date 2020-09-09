<template>
    <div>
        fu
        {{ fu }}
        <child :child='childs' @cbscasi='childFun' />
    </div>
</template>

<script>
import child from '@/views/child'
export default {
    components:{
        child
    },
    data(){
        return{
            childs:"这是传给子组件的值",
            fu:""
        }
    },
    methods:{
        childFun(item){
            this.fu = item
        }
    }
}
</script>