<template>
  <div>
    <div class="card" style="width: 18rem">
      <img :src="`http://image.tmdb.org/t/p/w342/${serie.backdrop_path}`" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ serie.name }}</h5>
        <h5 class="card-title">{{ serie.original_name }}</h5>
        <p class="card-text">
            {{serie.original_language }}
        </p>
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
};
</script>

<style lang="scss" scoped></style>
