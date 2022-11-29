<template>
  <div id="app">
    <HeaderComp @search="getMovies"/>
    <MainComp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'

import axios from 'axios';

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,

  },


    data(){
      return {
        movies: [],
        series: [],
        // userInput: '',
        key: 'b2a4c1ca9d6fe9f827b59f7ca0e3f94e',
      }
    },

    methods: {
      getMovies(value){
        console.log(this.movies);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.key}&query=${value}`)
          .then((response)=>{
            this.movies = response.data.results;
            console.log('sono dentro');
            console.log(this.movies);
            console.log(this.userInput);
          })

          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.key}&query=${value}`)
          .then((response)=>{
            this.series = response.data.results;
            console.log('sono dentro');
            console.log(this.series);
            console.log(this.userInput);
          })
          
      }
    }
  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
