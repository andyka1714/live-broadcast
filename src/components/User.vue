<template>
  <div class="user">
    <div class="user-form">
      <p class="title">使用者資料：</p>
      <el-row :gutter="10">
        <div class="field">
          <p>名字：</p><!--
          --><el-input placeholder="請輸入您的名字"></el-input>
        </div>
        <div class="field">
          <p>電話：</p><!--
          --><el-input placeholder="請輸入電話"></el-input>
        </div>
        <div class="field">
          <p>地址：</p><!--
          --><el-input placeholder="請輸入地址"></el-input>
        </div>
      </el-row>
      <button class="save">儲存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {

    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.user {
  height: calc(100vh - 81px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 81px;
  .user-form {
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
    .save {
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
