<template>
  <header>
    <div class="logoContainer">
      <img src="../assets/netflix-logo-png-2582.png" alt="" onClick="window.location.reload();">
    </div>
    <div class="navBar">
      <a href="#">Movies</a>
      <a href="#">Tv Series</a>
      <a href="#">Cartoons</a>
      <a href="#">My List</a>
    </div>


    <div class="input-group mb-3 inputContainer">
  <span class="input-group-text" id="basic-addon1"> <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> </span>
  <input type="text" class="form-control" placeholder="Search a movie or a series" aria-label="Search a movie or a series" aria-describedby="basic-addon1" v-model="userInput"
        @keyup.enter="$emit('search', userInput)">
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
        height: 15vh;
        
    }

    .logoContainer{
        padding: 2rem;
    }

    img{
        width: 200px;
    }

    .inputContainer{
        padding: 2rem;
        width: 400px;
    }

    a{
      color: white;
      text-decoration: none;
    }

    .navBar{
      width: 400px;
      display: flex;
      justify-content: space-around;

    }

</style>
