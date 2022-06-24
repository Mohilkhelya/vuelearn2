<template>
    <div>
        <h1> {{firstname}} {{lastname}}</h1>
        <h1> {{fname}} {{lname}} </h1>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
    export default {
        name:'DemoTwo',
        setup(){
          const state =  reactive({
                firstname: 'Jessie',
                lastname: 'Pinkman',
            })

            setTimeout(() => {
                state.firstname = 'Gus'
                state.lastname = 'Fring'
                console.log(state);
            }, 2000)

            return toRefs(state)
        },
        data(){
            return {
                fname: 'Jessie',
                lname: 'Pinkman',
            }
        }
    }
</script>

<style scoped>

</style>