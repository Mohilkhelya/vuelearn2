<template>
    <div>
        <form @submit.prevent="createpost">
            <div>
                <br><br>
                <label for="userid">POST ID</label>
                <br>
                <input type="text" id="userid" v-model="formData.userid">
                <br><br>
                <label for="title">POST USER TITLE</label>
                <br>
                <input type="text" id="title" v-model="formData.title">
                <br><br>
                <label for="body">POST USER BODY</label>
                <br>
                <input type="text" id="body" v-model="formData.body">
                <br><br>
                <button>Create Post</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'CreatePost',
        data(){
            return{
                formData:{
                    userid:'',
                    title: '',
                    body: '',
                }
            }
        },   
        methods:{
            createpost(){
                axios
                .post('https://jsonplaceholder.typicode.com/posts', this.formData)
                .then(response => console.log(response))
                .catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>

</style>