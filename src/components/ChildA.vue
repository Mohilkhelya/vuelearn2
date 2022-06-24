<template>
    <div>
        <h2>Child A component</h2>
        <ChildB />
    </div>
</template>

<script>
import ChildB from './ChildB.vue'
    export default {
        name: 'ChildA',
        components:{
            ChildB,
        },
        data(){
            return{
            }
        }
    }
</script>

<style scoped>

</style>