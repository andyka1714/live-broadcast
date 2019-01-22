<template>
  <div class="orders-info">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      type="card"
    >
      <el-tab-pane
        label="統計結單商品"
        name="first"
      >{{productList}}</el-tab-pane>
      <el-tab-pane
        label="查看訂單"
        name="second"
      >查看訂單</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "OrdersInfo",
  created() {},
  data() {
    return {
      activeName: "",
      productList: []
    };
  },
  mounted() {
    this.FBinit();
    this.getProduct();
    this.productList = this.products.map(product => {
      return {
        ...product,
        amount: 0
      };
    });
  },
  computed: {
    ...mapState({
      products: "products",
      stream_info: "stream_info",
      user_profile: "user_profile"
    }),
    orders() {
      return this.productList.filter(order => {
        return order.amount !== 0;
      });
    },
    totalPrice() {
      const orders = this.orders;
      return orders.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.amount;
      }, 0);
    }
  },
  methods: {
    FBinit() {
      FB.init({
        appId: "2269456716676684",
        cookie: true,
        xfbml: true,
        version: "v2.9"
      });
      FB.AppEvents.logPageView();
    },
    handleClick() {},
    getProduct() {
      this.$store.dispatch("getProduct", this.stream_info.id).then(res => {
        console.log(res.data);
        this.$store.commit("setProduct", res.data);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.orders-info {
  padding-top: 81px;
  .el-tabs__item {
    font-size: 20px;
  }
}
</style>