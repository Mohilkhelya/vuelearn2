import { ref } from 'vue'

export default function usecounter(initialcount = 0 , stepsize = 10){
    const count = ref(initialcount)

    function incrementcount(){
        count.value += stepsize
    }

    return{
        count,
        incrementcount
    }
}