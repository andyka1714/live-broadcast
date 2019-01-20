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
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LiveBroadcast',
  data () {
    return {
      liveBroadcastURL: "https://www.facebook.com/734001673476978/videos/1060604714123487/",
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
      ]
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
      };
    }
  },
}
</script>

<style lang="scss"scoped>
.live-broadcast {
  .video-content, .product-content {
    min-height: calc(100vh - 93px);
  }
  .video-content {
    text-align: center;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-content {
    margin: 0 auto;
    padding: 20px 0;
    position: relative;
    @media only screen and (max-width: 1650px) {
      width: 540px;
    }
    @media only screen and (min-width: 1651px) {
      width: 800px;
    }
    @media only screen and (max-width: 685px) {
      width: calc(80vw + 30px);
    }
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
        border: 1px solid;
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
  }
}
</style>
