<template>
    <div>
        <SeriesCard
        v-for="(element, index) in serieArray" :key="index" :serie="element"
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