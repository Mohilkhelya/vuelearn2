<template>
    <div>
        <h3>Parent component {{name}}</h3>

        <h3>Parent component count -  {{count}}</h3>
        <button @click="incrementcount">increment count</button>
        <h3>Parent component hero -  {{firstname}} {{lastname}}</h3>
        <ChildA />
    </div>
</template>

<script>
import ChildA from './ChildA.vue'
import { provide, ref, reactive, toRefs } from 'vue'

    export default {
        name: 'ProvideInject',
        components:{
            ChildA,
        },
        setup(){
            provide('c_username' , 'Codevolution')

            const count = ref(0)
            const state = reactive({
                firstname: 'TUPAC',
                lastname: 'SHAKUR'
            })

            function incrementcount(){
                count.value++
            }
            
            provide('c_count', count)
            provide('c_hero', state)
            provide('incrementcount', incrementcount)
            return{
                count,
                incrementcount,
                ...toRefs(state)
            }
        },
        data(){
            return{
                name: 'Vishwas',
            }
        },
        provide(){
            return{
                username: this.name,
            }
        }
    }
</script>

<style scoped>

</style>