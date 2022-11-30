<template>
  <div>
    <div class="cardContainer">

      <div class="imgContainer">
        <img :src="`http://image.tmdb.org/t/p/w342/${movie.backdrop_path}`" class="imageP" alt="..." />
      </div>

      <div class="txtContainer">

        <div class="titles">
          <h4>{{ movie.title }}</h4>
          <h6>{{ movie.original_title }}</h6>
        </div>

        <div class="langVote">

          <img :src="require(`../flagImg/${movie.original_language}.png`)">
          <p>Voto:
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

.cardContainer{
  width: 370px;
  height: 200px;
  position: relative;
  margin-bottom: 150px;
}

.langVote{
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 100px;
}

.imageP{
  -webkit-box-reflect: below 5px
		linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));
    -webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
  display: block;
  width: 100%;
}



.txtContainer{
  height: 220px;
  color: white;

  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.cardContainer:hover .txtContainer {
  bottom: -10px;
  height: 210px;
  background: linear-gradient(0deg, #00000088 60%, #ffffff44 100%);
}

.fa-star{
  color: goldenrod;
}

</style>
