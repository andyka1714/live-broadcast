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
        <el-table
          :data="orderList"
          style="width: 100%"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form
                label-position="left"
                inline
                class="demo-table-expand"
              >
                <el-form-item label="購買者">
                  {{props.row.buyer.data.recipient_name}}
                </el-form-item>
                <el-form-item label="寄送地址">
                  {{props.row.buyer.data.recipient_address}}
                </el-form-item>
                <el-form-item label="購買者電話">
                  {{props.row.buyer.data.recipient_phone}}
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="商品名稱"
            prop="product.title"
          >
          </el-table-column>
          <el-table-column
            label="商品單價"
            prop="product.price"
          >
          </el-table-column>
          <el-table-column
            label="商品數量"
            prop="quantity"
          >
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane
        label="查看訂單"
        name="second"
      >
        <el-table
          :data="orderList"
          style="width: 100%"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form
                label-position="left"
                inline
                class="demo-table-expand"
              >
                <el-form-item label="商品項目">
                  {{props.row.product.title}}
                </el-form-item>
                <el-form-item label="商品單價">
                  {{props.row.product.price}}
                </el-form-item>
                <el-form-item label="商品數量">
                  {{props.row.quantity}}
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="購買者"
            prop="buyer.data.recipient_name"
          >
          </el-table-column>
          <el-table-column
            label="購買者電話"
            prop="buyer.data.recipient_phone"
          >
          </el-table-column>
          <el-table-column
            label="寄送地址"
            prop="buyer.data.recipient_address"
          >
          </el-table-column>
        </el-table>
      </el-tab-pane>
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
      tableData: []
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
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>