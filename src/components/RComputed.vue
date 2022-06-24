<template>
    <div>
        <input type="text" placeholder="first Name" v-model="fname">
        <input type="text" placeholder="last Name" v-model="lname">
        <h1>Option Fullname is {{fullname}}</h1>

        <input type="text" placeholder="first Name" v-model="reffirstname">
        <input type="text" placeholder="last Name" v-model="reflastname">
        <h1>Composition(ref) Fullname is {{reffullname}}</h1>

        <input type="text" placeholder="first Name" v-model="reactivefirstname">
        <input type="text" placeholder="last Name" v-model="reactivelastname">
        <h1>Composition(reactive) Fullname is {{reactivefullname}}</h1>
    </div>
</template>

<script>
import {ref, computed, reactive, toRefs } from 'vue'
    export default {
        name:'RComputed',
        setup(){
            const reffirstname = ref('')
            const reflastname = ref('')

            const reffullname = computed(function(){
                return `${reffirstname.value} ${reflastname.value}`
            })

            const state = reactive({
                reactivefirstname: '',
                reactivelastname: ''

            })

            const reactivefullname = computed(function(){
                return `${state.reactivefirstname} ${state.reactivelastname}`
            })
            return{
                reffirstname,
                reflastname,
                reffullname,
                ...toRefs(state),
                reactivefullname

            }
        },
        data(){
            return{
                fname: '',
                lname: ''
            }
        },
        computed:{
            fullname(){
                return `${this.fname} ${this.lname}`
            },
        }
    }
</script>

<style scoped>

</style>