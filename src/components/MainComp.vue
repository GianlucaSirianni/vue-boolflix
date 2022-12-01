<template>
    <main>
        <div class="tempTitle">
            <h2>Movies</h2>
        </div>
        
        <MovieList :movieArray="moviesList"
        />
        <div class="tempTitle seriesTitleH">
            <h2>Tv Series</h2>
        </div>
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
        background-color: black;
        height: 85vh;
        overflow: auto;
    }

    .tempTitle{
        width: 80%;
        margin: auto;
        color: white;
    }

    .seriesTitleH{
        margin-top: 300px;
    }

</style>