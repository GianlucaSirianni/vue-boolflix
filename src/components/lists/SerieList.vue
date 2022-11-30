<template>
    <div>
        <SeriesCard
        v-for="(element, index) in serieArray" :key="index" :serie="element"
        class="series"/>
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
    div{
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 1rem;
    }

    .series{
        width: calc(100%/4);
    }

</style>