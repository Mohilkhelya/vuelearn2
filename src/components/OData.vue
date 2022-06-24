<template>
    <div>
        <h1>Option - {{ofirstname}}</h1>
        <h1>Option - {{ofirstname}} {{olastname}} a.k.a {{oheroname}}</h1>

        <h1>Composition - {{cfirstname}}</h1>
        <h1>Composition - {{ greet }}</h1>

        <h1>Composition - {{cfirstname}} {{clastname}} a.k.a {{cheroname}}</h1>
        <h1>Composition - {{ greethero }}</h1>

        <h1>Composition - {{state.firstname}} {{state.lastname}} a.k.a {{state.heroname}}</h1>
        <h1>Composition - {{ reavtivegreethero }}</h1>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
    export default {
        name:'OData',
        setup() {
            const cfirstname = ref('HARVEY') 
            const clastname = ref('SPECTOR') 
            const cheroname = ref('SUITS') 

            const greet =`Hello ${cfirstname.value}`
            const greethero = `Hello ${cfirstname.value} ${clastname.value} a.k.a ${cheroname.value}`

            const state =  reactive({
                firstname: 'WALTER',
                lastname: 'WHITE',
                heroname: 'HEISENBERG',
            })

            const reavtivegreethero = `Hello ${state.firstname} ${state.lastname} a.k.a ${state.heroname}`

            return{
                cfirstname,
                clastname,
                cheroname,
                greet,
                greethero,
                state,
                reavtivegreethero,
            }
        },
        data(){
            return{
                ofirstname: 'ELLIOT',
                olastname: 'ALDERSON',
                oheroname: 'Mr. ROBOT'
            }
        },
    }
</script>

<style scoped>

</style>   






