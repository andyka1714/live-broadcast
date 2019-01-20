<template>
  <header>
    <div class="main-wrapper">
      <img class="logo" src="" alt="" @click="$router.push('/')">
      <div class="menu login">
        <ul class="other-nav">
          <router-link tag="li" to="/live-broadcast">直播</router-link>
          <router-link tag="li" to="/login">登入</router-link>
        </ul>
          <button>我的頁面</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ['home'],
  created() {},
  data() {
    return {
      isLogin: false,
      expand: false,
      unread_messages_count: 0,
      timer: null
    };
  },
  created() {
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  height: 81px;
  box-shadow: 0 4px 12px -2px rgba(177, 177, 177, 0.5);
  line-height: 81px;
  position: relative;
  transition: .3s all;

  .logo {
    width: 58.6px;
    height: 58.6px;
    margin-top: 17px;
    margin-left: 30.4px;
    @media only screen and (max-width: 767px) {
      width: 49px;
      height: 49px;
      margin-top: 22px;
      margin-left: 13px;
    }
  }

  .menu {
    float: right;
    color: #999799;
    font-size: 19.7px;
    font-weight: 300;
    display: flex;
    align-items: center;
    li {
      display: inline-block;
      margin-left: 40px;
      position: relative;
    }
    .other-nav {
      display: inline-block;
      @media only screen and (max-width: 767px) {
        display: none;
      }
    }
    button {
      font-size: 19.7px;
      display: inline-block;
      height: 37.1px;
      color: #219ea9;
      width: 166.1px;
      background: #fff;
      margin-right: 35.2px;
      margin-left: 42.5px;
      border-radius: 20px;
      border: 2px solid #219ea9;
      font-weight: 400;
    }
    &.login button {
      background-color: #219ea9;
      color: #fff;
    }
    .phone-kuki{
      @media only screen and (min-width: 768px) {
        display: none;
      }
    }
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