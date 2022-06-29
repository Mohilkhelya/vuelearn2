<template>
    <div>
        <input type="text" placeholder="Firstname" v-model="firstname">
        <input type="text" placeholder="Lastname" v-model="lastname">
        <PersonGreeting :firstname= "firstname"  :lastname= "lastname" @callheroes="callheroes"/>
    </div>
</template>

<script>
import {ref} from 'vue'
    import PersonGreeting from './PersonGreeting.vue'
    export default {
        name:'PropsPerson',
        components: {
            PersonGreeting,
        },
        setup(){
            const firstname = ref('')
            const lastname = ref('')

            function callheroes(hero){
                alert(`Calling ${hero}`)
            }
            return{
                firstname,
                lastname,
                callheroes
            }
        },
    }
</script>

<style scoped>

</style>