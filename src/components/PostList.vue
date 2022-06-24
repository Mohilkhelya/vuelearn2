<template>
    <div>
        <button @click="getpost">Load Post</button>
        <h1 v-if="errormsg">{{errormsg}}</h1>
        <div v-for="post in posts" :key="post.id">
            <h3>{{post.id}} {{post.title}}</h3>
            <p>{{post.body}}</p>
            <hr />
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'PostList',
        // created(){
        //     this.getpost()
        // },
        data(){
            return{
                posts:[],
                errormsg: '',
            }
        },
        methods: {
            getpost(){
                axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    console.log(response.data)
                    this.posts = response.data
                })
                .catch((error) => {
                    console.log(error)
                    this.errormsg = 'Request failed with status code 404'
                })

            }
        },
    }
</script>

<style scoped>

</style>