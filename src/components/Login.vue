<template>
  <div class="login">
    <button @click="login" class="FB-login" v-if="!authorized"><i class="fab fa-facebook-f"></i>登入</button>
    <button @click="logout" class="FB-login" v-if="authorized"><i class="fab fa-facebook-f"></i>登出</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      profile: {},
      authorized: false
    }
  },
  mounted() {
    this.FBinit();
  },
  methods: {
    FBinit() {
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '2269456716676684',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.9'
        });
        FB.AppEvents.logPageView();
        console.log('fbAsyncInit')
        FB.getLoginStatus( response => {
          console.log('res', response)        // 這裡可以得到 fb 回傳的結果
        })
      };
    },
    getProfile () {
      let vm = this
      FB.api('/me?fields=name,id,email', function (response) {
        console.log('res in graphAPI', response)
        vm.$set(vm, 'profile', response)
      })
    },
    login() {
      let vm = this
      FB.login(function (response) {
        console.log('res', response)
        vm.statusChangeCallback(response)
      }, {
        scope: 'email, public_profile',
        return_scopes: true
      })
    },
    logout () {
      let vm = this
      FB.logout(function (response) {
        console.log('res when logout', response)
        vm.statusChangeCallback(response)
      })
    },
    statusChangeCallback (response) {
      let vm = this
      if (response.status === 'connected') {
        vm.authorized = true
        vm.getProfile()
      } else if (response.status === 'not_authorized') {
        vm.authorized = false
      } else {
        vm.authorized = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  min-height: calc(100vh - 93px);
  display: flex;
  justify-content: center;
  align-items: center;
  .FB-login {
    width: 100px;
    padding: 5px;
    border: 0;
    border-radius: 5px;
    color: white;
    font-size: 24px;
    background-color: #4267b2;
    i {
      margin-right: 5px;
    }
  }
}
</style>
