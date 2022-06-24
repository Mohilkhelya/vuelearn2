<template>
    <div>
        <input type="text" ref="inputref" >
        <Postlist ref="postlistref" />
    </div>
</template>

<script>
import Postlist from './PostList.vue'
    export default {
        name:'TemplateRef',
        components:{
            Postlist,
        },
        mounted(){
            console.log(this.$refs.postlistref)
            this.$refs.inputref.focus()
        }
    }
</script>

<style scoped>

</style> 