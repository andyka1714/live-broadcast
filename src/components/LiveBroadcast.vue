<template>
  <div class="live-broadcast">
    <el-row v-if="stream_info.url">
      <el-col :xs="24" :sm="24" :md="12">
        <div class="video-content">
          <div class="fb-video" :data-href="stream_info.url" data-width="500" data-allowfullscreen="true">
            <blockquote :cite="stream_info.url" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/734001673476978/videos/1060604714123487/"></a>
            </blockquote>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12">
        <div class="product-content">
          <div class="product-card" v-for="(product, index) in productList">
            <div class="cover-img" :style="{ backgroundImage: `url(${product.image_url})`}"></div>
            <div class="product-info">
              <p class="product-number">編號：{{index + 1}}</p>
              <p class="product-name">名稱：{{product.title}}</p>
              <p class="product-price">價格：{{product.price}}</p>
              <div class="product-counter">
                <el-input-number size="mini" :min="0" v-model="product.amount" @change="function(e){buyProduct(index, e)}"></el-input-number>
              </div>
            </div>
          </div>
          <button class="order-button" @click="showOrders">查看訂單</button>
        </div>
      </el-col>
    </el-row>
    <div class="no-live-broadcast" v-if="!stream_info.url">
      <p>目前沒有直播喲～</p>
    </div>
    <Model title="您的訂單" v-if="isShowOrders" @close="isShowOrders = false">
      <ul class="orders">
        <li class="order" v-for="(order, index) in orders">
          <div class="order-img" :style="{ backgroundImage: `url(${order.image_url})`}"></div>
          <div class="order-info">
            <p class="order-name">名稱：{{order.title}}</p><!--
            --><p class="order-price">價格：{{order.price}}</p><!--
            --><p class="order-amount">數量：{{order.amount}}</p>
          </div>
        </li>
      </ul>
      <div class="total-price">
        <div class="line"></div>
        <span>總共費用：{{totalPrice}}</span>
      </div>
    </Model>
  </div>
</template>

<script>
import Model from "./common/Model.vue";
import { mapState } from 'vuex'
export default {
  name: 'LiveBroadcast',
  components: {
    Model
  },
  data () {
    return {
      isShowOrders: false,
      productList: []
    }
  },
  created() {
    
  },
  computed: {
    ...mapState({
      products: 'products',
      stream_info: 'stream_info',
      user_profile: 'user_profile',
    }),
    orders() {
      return this.productList.filter(order => {
        return order.amount !== 0
      })
    },
    totalPrice() {
      const orders = this.orders
      return orders.reduce(
        (accumulator, currentValue) => {
        return accumulator + (currentValue.price * currentValue.amount);
      },0)
    }
  },
  mounted() {
    this.FBinit();
    this.getProduct();
  },
  methods: {
    FBinit() {
      FB.init({
        appId      : '2269456716676684',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.9'
      });
      FB.AppEvents.logPageView();
    },
    showOrders() {
      this.isShowOrders = true;
    },
    getProduct() {
      this.$store.dispatch('getProduct', this.stream_info.id)
        .then(res => {
          this.$store.commit('setProduct', res.data);
        })
    },
    buyProduct(index, e) {
      let data = {
        quantity: e,
        product_id: this.productList[index].id,
        stream_id: this.stream_info.id
      }
      this.$store.dispatch('buyAProduct', data)
    }
  },
  watch: {
    products(val) {
      this.productList = this.products.map(product => {
      return {
        ...product,
        amount: 0
      }
    })
    }
  }
}
</script>

<style lang="scss"scoped>
.live-broadcast {
  padding-top: 81px;
  .video-content {
    text-align: center;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 81px);
    overflow: hidden;
  }
  .product-content::-webkit-scrollbar {
    display: none;
  }
  .product-content {
    margin: 0 auto;
    padding: 20px 0;
    position: relative;
    overflow-y: scroll;
    height: calc(100vh - 81px);
    width: 100%;
    text-align: center;
    .product-card{
      max-width: 245px;
      max-height: 370px;
      width: 40vw;
      // height: 55vw;
      border: 1px #ddd solid;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      display: inline-block;
      margin: 5px 5px 40px;
      cursor: pointer;
      .cover-img {
        height: 40vw;
        max-height: 245px;
        background-size: cover;
        background-position: top center;
      }
      .product-info {
        padding: 5px 0;
        p {
          padding: 0 10px;
        }
      }
      .product-counter {
        text-align: center;
        padding: 5px 0;
      }
      @media only screen and (max-width: 685px) {
        margin: 5px 5px 20px;
      }
      @media only screen and (max-width: 420px) {
        .product-info {
          p {
            font-size: 12px;
          }
        }

      }
    }
    .order-button {
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
      height: 100vh; 
    }
  }
  .no-live-broadcast {
    position: relative;
    width: 100vw;
    height: 100vh;
    p {
      width: 160px;
      font-size: 20px;
      color: #555;
      position: absolute;
      top: calc(50% - 14px);
      left: calc(50% - 80px);
    }
  }
  .orders {
    padding: 10px;
    .order {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .order-img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        background-size: cover;
        background-position: top center;
        border-radius: 5px;
      }
      .order-info {
        width: calc(100% - 60px);
        p {
          width: 50%;
          display: inline-block;
        }
      }
    }
  }
  .total-price {
    text-align: right;
    .line {
      height: 1px;
      background-color: #999;
      margin-bottom: 10px;
    }
  }
}
</style>
