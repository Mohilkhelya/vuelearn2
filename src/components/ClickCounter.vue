<template>
    <div>
        <button @click="incrementcount">Clicked {{count}} times</button>
    </div>
</template>

<script>
import countermixins from '../mixins/counter'

    export default {
        name:'ClickCounter',
        mixins: [countermixins],
    }
</script>

<style scoped>

</style>