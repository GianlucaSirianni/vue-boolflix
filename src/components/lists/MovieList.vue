<template>
    <div>
        <MovieCards
        v-for="(elem, index) in movieArray" :key="index" :movie="elem"
        class="movies"/>
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
        div{
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 1rem;
    }

    .movies{
        width: calc(100%/4);
    }
</style>