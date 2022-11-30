<template>
  <div>
    <div class="card">
      <img :src="`http://image.tmdb.org/t/p/w342/${movie.backdrop_path}`" class="card-img-top" alt="..." />
      <div class="card-body">

            <div class="titles">
                <h4 class="card-title">{{ movie.title }}</h4>
                <h6 class="card-title">{{ movie.original_title }}</h6>
            </div>



            <div class="langVote">
                <img :src="require(`../flagImg/${movie.original_language}.png`)">
                <p class="card-text">Voto:
                    <font-awesome-icon icon="fa-solid fa-star" v-for="(index) in this.vote" :key='index' />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="(index) in 5 - this.vote" :key='index' />
                </p>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCards",
  props: {
    movie: Object,
  },

  data(){
    return{
        vote: Math.ceil((this.movie.vote_average / 2))
    }
  },

  methods: {

  }
};
</script>

<style lang="scss" scoped>

.langVote{
    display: flex;
    justify-content: space-between;
}

.flexColJus{
    display: flex;
    flex-direction: column;
    align-items: space-between;
}



.card-img-top{
    height: 200px;
}



</style>
