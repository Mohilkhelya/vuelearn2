<template>
    <div>
        <br><br>
        <input type="text" placeholder="First Name" v-model="fname">
        <input type="text" placeholder="last Name" v-model="lname">
<br><br>
        <input type="text" placeholder="hero Name" v-model="heroname">
        <input type="text" placeholder="first Name" v-model="firstname">
        <input type="text" placeholder="last Name" v-model="lastname">
    </div>
</template>

<script>
import { ref, reactive, toRefs} from 'vue'
    export default {
        name: 'VModel',
        setup(){
            const heroname = ref('')
            const state = reactive({
                firstname: '',
                lastname: '',
            })
            return{
                heroname,
                ...toRefs(state)

            }
        },
        data(){
            return{
                fname: '',
                lname: ''
            }
        }
    }
</script>

<style scoped>

</style>