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
      >
        <el-form
          :inline="true"
          class="demo-form-inline"
        >
          <el-form-item label="审批人">
          </el-form-item>
        </el-form>
      </el-tab-pane>
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
      orderList: [],
      buyerList: []
    };
  },
  mounted() {
    this.FBinit();
    this.getOrder();
    this.orderList = this.orders.map(product => {
      return {
        ...product,
        amount: 0
      };
    });
  },
  computed: {
    ...mapState({
      orders: "orders",
      stream_info: "stream_info",
      user_profile: "user_profile"
    }),
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
      this.getOrder();
      this.orderList = this.orders.filter(order => order.product);
      this.buyerList = this.orders.filter(order => order.buyer);
    },
    handleClick() {},
    getOrder() {
      this.$store.dispatch("getOrder", this.stream_info.id).then(res => {
        this.$store.commit("setOrder", res.data);
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