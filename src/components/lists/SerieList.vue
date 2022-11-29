<template>
    <div>
        <SeriesCard
        v-for="(elem, index) in serieArray" :key="index" :serie="elem"
        />
    </div>
</template>

<script>
import SeriesCard from '../cards/SeriesCard.vue'
    export default {
        name: "SerieList",
        components: {
            SeriesCard
        },
        props: {
            serieArray: Array,
        }
    }
</script>

<style lang="scss" scoped>

</style>