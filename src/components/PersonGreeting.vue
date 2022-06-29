<template>
    <div>
        <h1>Hello {{fullname}} </h1>
        <button @click="sendevent">Call Heros</button>
    </div>
</template>

<script>
import {computed} from 'vue'
    export default {
        name: 'PersonGreeting',
        props:['firstname', 'lastname'],
        setup(props, context){
            const fullname = computed(() => {
                return `${props.firstname} ${props.lastname}` 
            })

            function sendevent (){
                context.emit('callheroes', fullname.value)
            }
            return{
                fullname,
                sendevent,
            }
        }

        // computed: {
        //     fullname(){
        //         return `${this.firstname} ${this.lastname}`
        //     }
        // }
    }
</script>

<style scoped>

</style>