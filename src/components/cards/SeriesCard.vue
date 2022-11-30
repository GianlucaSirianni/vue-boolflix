<template>
  <div>
    <div class="card" style="width: 18rem">
      <img
        :src="`http://image.tmdb.org/t/p/w342/${serie.backdrop_path}`"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h4 class="card-title">{{ serie.name }}</h4>
        <h6 class="card-title">{{ serie.original_name }}</h6>
        <div class="langVote">
            <img :src="require(`../flagImg/${serie.original_language}.png`)">
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
  name: "SeriesCard",
  props: {
    serie: Object,
  },

  data(){
    return{
        vote: Math.ceil((this.serie.vote_average / 2))
    }
  },



};
</script>

<style lang="scss" scoped>

.langVote{
    display: flex;
    justify-content: space-between;
}

</style>
