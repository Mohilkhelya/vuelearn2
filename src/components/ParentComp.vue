<template>
    <div>
        <h2>Parent Component</h2>
        <button @click="showchild = !showchild" >Toggle Child</button>
        <ChildComp v-if="showchild" />
    </div>
</template>

<script>
import ChildComp from './ChildComp.vue'
    export default {
        name:'ParentComp',
        components: {
            ChildComp,
        },
        data(){
            return{
                showchild: true,
            }
        },
         beforeCreate(){
            console.log('Child beforeCreate()')
        },
        created(){
            console.log('Child created()')
        },
        beforeMount(){
            console.log('Child beforeMount()')
        },
        mounted(){
            console.log('Child mounted()')
        },
        beforeUpdate(){
            console.log('Child beforeUpdate()')
        },
        updated(){
            console.log('Child updated()')
        },
        beforeUnmount(){
            console.log('Child beforeCreate()')
        },
        unmounted(){
            console.log('Child unmounted()')
        },
    }
</script>

<style scoped>

</style>