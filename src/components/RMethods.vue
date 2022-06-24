<template>
    <div>
        <h2>{{name}}</h2>
        <button @click="setname">Change Name</button>

        <h1> {{count}} </h1>
        <button @click="incrementcount"> Increment Count</button>

        <h1>{{first}} {{last}}</h1>
        <button @click="changehero">Change Hero</button>
    </div>
</template>
<script>
import { ref, reactive, toRefs } from 'vue'
    export default {
        name:'RMethods',
        setup(){
            const count = ref(0)
            const state = reactive({
                first: 'Ronaldo',
                last: 'cristiano'
            })

            function incrementcount(){
                count.value++
            }

            function changehero(){
                state.first = 'Neymar',
                state.last = 'JR'
            }

            return{
                count,
                incrementcount,
                ...toRefs(state),
                changehero
            }
        },
        data(){
            return{
                name: 'Macintosh',
            } 
        },
        methods: {
            setname() {
                this.name = 'Apple'
            }
        }
    }
</script>

<style scoped>

</style>        