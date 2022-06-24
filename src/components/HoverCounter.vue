<template>
    <div>
        <h1 @mouseover="incrementcount">Hovered {{count}} times</h1>
    </div>
</template>

<script>
import countermixins from '../mixins/counter'

    export default {
        name:'HoverCounter',
        mixins: [countermixins],
    }
</script>

<style scoped>

</style>