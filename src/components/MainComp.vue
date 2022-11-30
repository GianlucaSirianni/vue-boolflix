<template>
    <main>
        <h2>Movies</h2>
        <MovieList :movieArray="moviesList"
        />
        <h2>Tv Series</h2>
        <SerieList :serieArray="seriesList" />
    </main>
</template>

<script>
import MovieList from './lists/MovieList.vue'
import SerieList from './lists/SerieList.vue'

    export default {
        name: "MainComp",
        components:{
            MovieList,
            SerieList,
        },
        props: {
            moviesList: Array,
            seriesList: Array,
        }
    };
</script>

<style lang="scss" scoped>

    main{
        background-color: blue;
    }

</style>