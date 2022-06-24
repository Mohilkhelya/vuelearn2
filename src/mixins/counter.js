export default {
    name:'counter',
    data(){
        return{
            count: 0,
        }
    },
    methods:{
        incrementcount(){
            this.count += 1
        }
    } 
}