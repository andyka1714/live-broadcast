<template>
  <div class="live-broadcast">
    <el-row>
      <el-col :xs="24" :sm="24" :md="12">
        <div class="video-content">
          <div class="fb-video" :data-href="liveBroadcastURL" data-width="500" data-allowfullscreen="true">
            <blockquote :cite="liveBroadcastURL" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/734001673476978/videos/1060604714123487/"></a>
            </blockquote>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12">
        <div class="product-content">
          <div class="product-card" v-for="product in products">
            <div class="cover-img" :style="{ backgroundImage: `url(${product.img})`}"></div>
            <div class="product-info">
              <p class="product-number">編號：{{product.no}}</p>
              <p class="product-name">名稱：{{product.name}}</p>
              <p class="product-price">價格：{{product.price}}</p>
              <div class="product-counter">
                <el-input-number size="mini" :min="0" v-model="product.amount"></el-input-number>
              </div>
            </div>
          </div>
          <button class="order-button" @click="showOrders">查看訂單</button>
        </div>
      </el-col>
    </el-row>
    <Model title="您的訂單" v-if="isShowOrders" @close="isShowOrders = false">
      <ul class="orders">
        <li class="order" v-for="order in orders">
          <div class="order-img" :style="{ backgroundImage: `url(${order.img})`}"></div>
          <div class="order-info">
            <p class="order-number">編號：{{order.no}}</p><!--
            --><p class="order-name">名稱：{{order.name}}</p><!--
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
export default {
  name: 'LiveBroadcast',
  components: {
    Model
  },
  data () {
    return {
      liveBroadcastURL: "https://www.facebook.com/littleroom9488/videos/797034557329831/",
      products: [
        {
          no: 1,
          name: '李成敏',
          img: 'http://hebei.hebnews.cn/attachement/png/site2/20160408/b8ca3a7bf9831871b54f49.png',
          price: 1000,
          amount: 0
        },
        {
          no: 2,
          name: '李成敏',
          img: 'http://hbimg.b0.upaiyun.com/bbbb00b32e1fb0303d5420302669523e0f83813035d2b-NKtopu_fw658',
          price: 1000,
          amount: 0
        },
        {
          no: 3,
          name: '李成敏',
          img: 'http://images.china.cn/attachement/jpg/site1000/20151128/c03fd54abc3e17c35bd844.jpg',
          price: 1000,
          amount: 0
        },
        {
          no: 4,
          name: '李成敏',
          img: 'http://www.mlito.com/wp-content/uploads/2017/09/0021ccb6e83e17bd008e4a.jpg',
          price: 1000,
          amount: 0
        },
        {
          no: 5,
          name: '李成敏',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuYm7l2sU396HQIalfco_JxR7E1S7xOOFoFM32_mr9A2xluzD',
          price: 1000,
          amount: 0
        },
        {
          no: 6,
          name: '李成敏',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgbl764O1SnnT9jkOHtVWTma7tJDSzkyCV4lWPfD3HOfCS0biKA',
          price: 1000,
          amount: 0
        }
      ],
      isShowOrders: false
    }
  },
  computed: {
    orders() {
      return this.products.filter(order => {
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
  },
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
      height: 55vw;
      border: 1px #ddd solid;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      display: inline-block;
      margin: 5px 5px 40px;
      cursor: pointer;
      .cover-img {
        height: 65%;
        max-height: 255px;
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
        height: 60vw;
        .cover-img {
          height: 55%;
        }
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
