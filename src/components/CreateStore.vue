<template>
  <div class="create-store">
    <div class="store-form">
      <p class="title">建立賣場：</p>
      <el-row :gutter="10">
        <div class="field">
          <p>名字：</p><!--
          --><el-input placeholder="請輸入您的直撥網址" v-model="url"></el-input>
        </div>
      </el-row>
      <button class="submit" @click="createStore">建立</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      url: ''
    };
  },
  methods: {
    createStore() {
      this.$store.commit('setLiveBroadcastURL', this.url)
      this.$router.push('/live-broadcast')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.create-store {
  height: calc(100vh - 81px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 81px;
  .store-form {
    padding: 20px;
    border: 1px solid #aaa;
    border-radius: 10px;
    width: 100vw;
    max-width: 500px;
    .title {
      font-size: 20px;
      margin-bottom: 20px;
      color: #555;
    }
    .field {
      margin-bottom: 20px;
      p, .el-input {
        display: inline-block;
      }
      p {
        width: 50px;
        line-height: 40px;
        text-align: right;
      }
      .el-input {
        width: calc(100% - 50px);
      }
    }
    .submit {
      display: block;
      margin: 0 auto;
      padding: 5px 10px;
      font-size: 20px;
      color: white;
      border-radius: 10px;
      border: 0;
      background-color: #0066FF;
      cursor: pointer;
    }
    @media only screen and (max-width: 450px) {
      border: 0;
    }
  }
}
</style>
