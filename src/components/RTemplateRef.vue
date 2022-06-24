<template>
    <div>
        <input type="text" ref='inputref' >
    </div>
</template>

<script>
import { ref, onMounted  } from 'vue'
    export default {
        name: 'RTemplateRef',
        setup(){
            const inputref = ref(null)

            onMounted(() => {
                inputref.value.focus()
            })
            return{
                inputref,
            }
        }, 
        mounted(){
            this.$refs.inputref.focus()
        }
    }
</script>

<style scoped>

</style>