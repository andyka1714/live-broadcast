<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "./components/common/Header.vue";
export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
</style>
