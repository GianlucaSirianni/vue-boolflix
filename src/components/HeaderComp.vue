<template>
  <header>
    <div class="logoContainer">
        <img src="../assets/netflix-logo-png-2582.png" alt="">
    </div>
    <div class="inputContainer">
      <input
        type="text"
        placeholder="Search a movie or a series"
        v-model="userInput"
        @keyup.enter="$emit('search', userInput)"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  data() {
    return {
      userInput: "",
    };
  },

  methods() {},
};
</script>

<style lang="scss" scoped>

    header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
    }

    .logoContainer{
        padding: 2rem;
    }

    img{
        width: 200px;
    }

    .inputContainer{
        padding: 2rem;
    }

</style>
