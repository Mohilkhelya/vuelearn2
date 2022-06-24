<template>
    <div>
        <h1>Child Component</h1>
    </div>
</template>

<script>
    export default {
        name:'ChildComp',
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