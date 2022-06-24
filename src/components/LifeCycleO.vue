<template>
    <div>
        Options Api lifecycle hooks
    </div>
</template>

<script>
    export default {
        name: 'LifeCycleO',
        beforeCreate(){
            console.log('LifeCycleO beforecreated()')
        },
        created(){
            console.log('LifeCycleO created()')
        },
        beforeMount(){
            console.log('LifeCycleO beforeMount()')
        },
        mounted(){
            console.log('LifeCycleO mounted()')
        },
        beforeUpdate(){
            console.log('LifeCycleO beforeUpdate()')
        },
        Updated(){
            console.log('LifeCycleO Updated()')
        },
        beforeUnmount(){
            console.log('LifeCycleO beforeMount()')
        },
        Unmounted(){
            console.log('LifeCycleO mounted()')
        },
    }
</script>

<style scoped>

</style>