<template>
  <header :class="{home: isHome}">
      <img class="logo" src="http://hanwen360.com/img/shufa/ks/7/d935a1efce89a539.png" alt="" @click="$router.push('/')">
      <div class="menu login">
        <template v-if="authorized">
          <ul class="nav">
            <router-link tag="li" to="/live-broadcast">直播</router-link>
            <router-link tag="li" to="/create-store">創建賣場</router-link>
            <router-link tag="li" to="/orders-info">訂單資訊</router-link>
          </ul>
          <button @click="$router.push('/user')">我的頁面</button>
        </template>
        <button @click="login" class="FB-login" v-if="!authorized"><i class="fab fa-facebook-f"></i>登入</button>
        <button @click="logout" class="FB-login" v-if="authorized"><i class="fab fa-facebook-f"></i>登出</button>
      </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Header",
  created() {},
  data() {
    return {
      isHome: false,
    };
  },
  created() {
    this.judgementPath();
    this.FBinit();
  },
  computed: {
    ...mapState({
      user_profile: 'user_profile',
      live_broadcast: 'live_broadcast'
    }),
    authorized() {
      return Object.keys(this.user_profile).length !== 0
    }
  },
  methods: {
    judgementPath () {
      if (this.$route.name === 'Home') {
        this.isHome = true
      } else {
        this.isHome = false
      }
    },
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
        let token = response.authResponse.accessToken
        vm.statusChangeCallback(response, token)
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
    statusChangeCallback (response, token) {
      if (response.status === 'connected') {
        this.getProfile();
        this.$cookies.set("token", token);
        this.$store.dispatch('setToken', token);
        this.$store.dispatch('login')
          .then(res => {
            this.$store.commit('setUserProfile', {...res.data});
          });
      } else {
        this.$store.commit('clearUserProfile');
        this.$cookies.remove("token");
        this.$router.push('/')
      } 
    }
  },
  watch: {
    '$route': function() {
      if (this.$route.name === 'Home') {
        this.isHome = true
      } else {
        this.isHome = false
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  width: 100%;
  height: 81px;
  box-shadow: 0 4px 12px -2px rgba(177, 177, 177, 0.5);
  line-height: 81px;
  position: absolute;
  z-index: 99;

  .logo {
    width: 58.6px;
    height: 58.6px;
    margin-top: 10px;
    margin-left: 30px;
    border: 1px dashed black;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    @media only screen and (max-width: 767px) {
      width: 49px;
      height: 49px;
      margin-left: 20px;
      margin-top: 15px;
    }
  }

  .menu {
    float: right;
    color: #999799;
    font-size: 19.7px;
    font-weight: 300;
    display: flex;
    align-items: center;
    height: 81px;
    li {
      cursor: pointer;
      display: inline-block;
      margin-left: 40px;
      position: relative;
    }
    .nav {
      display: inline-block;
      @media only screen and (max-width: 767px) {
        display: none;
      }
    }
    button {
      cursor: pointer;
      font-size: 19.7px;
      display: inline-block;
      height: 37.1px;
      color: #219ea9;
      width: 166.1px;
      background: #fff;
      margin: 0 30px;
      border-radius: 20px;
      border: 2px solid #219ea9;
      font-weight: 400;
    }
    &.login button {
      background-color: #219ea9;
      color: #fff;
    }
    .FB-login {
      width: 100px;
      border: 0;
      border-radius: 5px;
      color: white;
      font-size: 20px;
      background-color: #4267b2 !important;
      i {
        margin-right: 5px;
      }
    }
  }
}

.home{
  box-shadow: 0 0 0;
  color: white;
  .menu{
    color: white;
  }
}


@media only screen and (max-width: 768px) {
  header .menu button {
    margin: 0 5px;
    width: 140px;
  }
  header .menu li {
    margin-left: 0;
    margin-right: 10px;
  }
}
</style>