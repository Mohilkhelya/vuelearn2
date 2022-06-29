<template>
    <div>
        <h1 @mouseover="incrementcount">Hovered {{count}} times</h1>
    </div>
</template>

<script>
// import countermixins from '../mixins/counter'
import UseCounter from '../composables/UseCounter'

    export default {
        name:'HoverCounter',
        // mixins: [countermixins],
        setup(){
           const { count, incrementcount } = UseCounter(10, 10)
           
            return{
                count,
                incrementcount
            }
        }
    }  
</script>

<style scoped>
 
</style>