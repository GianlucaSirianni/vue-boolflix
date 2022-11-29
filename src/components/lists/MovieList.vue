<template>
    <div>
        <MovieCards
        v-for="(elem, index) in movieArray" :key="index" :movie="elem"
        />
    </div>
</template>

<script>
import MovieCards from '../cards/MovieCards.vue'
    export default {
        name: "MovieList",
        components: {
            MovieCards
        },
        props: {
            movieArray: Array,
        }
    }
</script>

<style lang="scss" scoped>

</style>