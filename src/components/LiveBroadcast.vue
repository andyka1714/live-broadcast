<template>
  <div class="live-broadcast">
  </div>
</template>

<script>
export default {
  name: 'LiveBroadcast',
  mounted() {
    this.FBinit();
  },
  methods: {
    FBinit() {
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '<app-id>',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.9'
        });
        FB.AppEvents.logPageView();
        console.log('fbAsyncInit')
      };
    }
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
