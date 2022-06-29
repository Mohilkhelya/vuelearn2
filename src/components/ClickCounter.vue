<template>
    <div>
        <button @click="incrementcount">Clicked {{count}} times</button>
    </div>
</template>

<script>
// import countermixins from '../mixins/counter'
import UseCounter from '../composables/UseCounter'

    export default {
        name:'ClickCounter',
        // mixins: [countermixins],
        setup(){
           const { count, incrementcount } = UseCounter(10 , 10)
           
            return{
                count,
                incrementcount
            }
        }
    }
</script>

<style scoped>
</style> 