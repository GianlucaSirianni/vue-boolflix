<template>
    <div>
        <p>{{movie.title}}</p>
    </div>
</template>

<script>
    export default {
        name: "MovieCards",
        props: {
            movie: Object
    }
}
</script>

<style lang="scss" scoped>

</style>