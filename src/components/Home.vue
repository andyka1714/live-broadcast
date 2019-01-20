<template>
  <div class="home">
    <video autoplay loop muted>
      <source src="../assets/Pexels Videos 4830.mp4">
    </video>
    <button @click="$router.push('/live-broadcast')">開始體驗</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {

    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  position: relative;
  video {
    z-index: 1;
    position: fixed;
    min-width: 100vw;
    min-height: 100vh;
  }
  button {
    position: fixed;
    z-index: 99;
    padding: 10px 20px;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 10px;
    font-size: 24px;
    top: calc(50% - 29px);
    left: calc(50% - 94px);
    cursor: pointer;
  }
}

</style>
