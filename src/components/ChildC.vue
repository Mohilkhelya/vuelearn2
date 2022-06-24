<template>
    <div>
        <h2>Child C component</h2>
        <h2>Child C component username - {{username}}</h2>
        <h2>Child C component (composition) username - {{childusername}}</h2>

        <h2>Child C component count - {{childcount}}</h2>
        <button @click="incrementcount">increment count child</button>
        <h2>Child C component hero - {{firstname}} {{lastname}}</h2>
    </div>
</template>

<script>
import { inject, toRefs } from 'vue'
    export default {
        setup(){
           const childusername =  inject('c_username' , 'Default username')
           const childcount = inject('c_count', 0)
           const childhero = inject('c_hero', {})
           const incrementcount = inject('incrementcount')

           inject()
           return{
               childusername,
               childcount,
               incrementcount,
               ...toRefs(childhero)
           }
        },
        name:'ChildC',
        inject: ['username'],
    }
</script>

<style scoped>

</style>