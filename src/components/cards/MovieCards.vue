<template>
  <div>
    <div class="card" style="width: 18rem">
      <img :src="`http://image.tmdb.org/t/p/w342/${movie.backdrop_path}`" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <h5 class="card-title">{{ movie.original_title }}</h5>
        <img :src="require(`../flagImg/${movie.original_language}.png`)">
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

  methods: {
    
  }
};
</script>

<style lang="scss" scoped></style>
