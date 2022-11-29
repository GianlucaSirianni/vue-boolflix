<template>
    <div>
        <input type="text" 
        v-model="userInput"
        @keyup.enter="$emit('search', userInput)"
        >
    </div>
</template>

<script>
    export default {
        name: "HeaderComp",
        data(){
            return{
                userInput: ''
            };
        },

        methods(){

        }
    };
</script>

<style lang="scss" scoped>

</style>