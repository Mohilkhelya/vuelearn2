<template>
    <div>
        <input type="text" placeholder="name" v-model="name">
<br><br>
        <input type="text" placeholder="first name" v-model="firstname">
        <input type="text" placeholder="last name" v-model="lastname">
<br><br>
        <input type="text" placeholder="reactive first name" v-model="fname">
        <input type="text" placeholder="reactive last name" v-model="lname">
        <input type="text" placeholder="reactive hero name" v-model="option.heroname">
    </div>
</template>

<script>   
import { ref, watch, reactive, toRefs } from 'vue'
import _ from 'lodash'
    export default {
        name:'RWatch',
        setup(){
            const firstname = ref('')
            const lastname = ref('batman')

            watch([firstname, lastname],
            (newvalue, oldvalue) => {
                 console.log('oldvalue', oldvalue[0])
                console.log('newvalue', newvalue[0])
                console.log('oldvalue', oldvalue[1])
                console.log('newvalue', newvalue[1])
            }, 
            {
             immediate: true,
            })

            const state = reactive({
                fname:'',
                lname:'',
                option:{
                    heroname: '',
                }
            })

            watch(() => {
                return{...state}
            },
                function(newvalue, oldvalue){
                console.log('oldvalue', oldvalue.fname)
                console.log('newvalue', newvalue.fname)
                console.log('oldvalue', oldvalue.lname)
                console.log('newvalue', newvalue.lname)
            })

            watch( 
                () => _.cloneDeep(state.option),
                function(newvalue, oldvalue){
                  console.log('oldvalue', oldvalue)
                  console.log('newvalue', newvalue)
                },
                {
                 deep: true,
                }
            )

            return{
                firstname,
                lastname,
                ...toRefs(state),
            }
        },

        data(){
            return{
                name: '',
            }
        },
        watch:{
            name(newvalue, oldvalue){
                console.log('newvalue', newvalue)
                console.log('oldvalue', oldvalue)
            }
        },
    }
</script>

<style scoped>

</style>