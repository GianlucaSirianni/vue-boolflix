<template>
  <div>
    <div class="card" style="width: 18rem">
      <img
        :src="`http://image.tmdb.org/t/p/w342/${serie.backdrop_path}`"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ serie.name }}</h5>
        <h5 class="card-title">{{ serie.original_name }}</h5>
        <img :src="require(`../flagImg/${serie.original_language}.png`)">
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

  methods: {},
};
</script>

<style lang="scss" scoped></style>
