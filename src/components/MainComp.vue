<template>
    <div>
        <MovieList :movieArray="moviesList"
        />
        <SerieList :serieArray="seriesList" />
    </div>
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

</style>