<template>
<div>
  <div class="search-bar">
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入商品名称"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
  <div class="swiper-area" ref="swiper">
    <slides :autoplay="3000" :images="slides"></slides>
  </div>
  <div class="category">
    <div v-for="(image,index) in category" :key="index">
      <img v-lazy="image.image" width="90%">
      <span>{{image.mallCategoryName}}</span>
    </div>
  </div>
  <div class="picture">
    <img v-lazy="advertesPicture.PICTURE_ADDRESS" width="100%">
  </div>
  <div class="recommend-area">
    <div class="recommend-title">商品推荐</div>
    <div class="recommend-swiper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,index) in recommend" :key="index">
          <div class="recommend-item">
            <img :src="item.image" width="80%">
            <p>{{item.goodsName}}</p>
            <p>¥{{item.price}}({{item.mallPrice}})</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <floor :floorData="floor" :floorName="floorName"></floor>
  <tabBar :index="0"></tabBar>
</div>
</template>

<script>
  import tabBar from "../base/tabBar.vue"
  import floor from "../base/floor.vue"
  import slides from "../base/slides.vue"
  import 'swiper/dist/css/swiper.css'
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  import {getSlidesData,getRecommendData,getHotGoodsData,getCategoryData,getAdvertesPicture,getFloorData} from "../../api";

  export default {
    data(){
      return {
        value:"酸奶",
        slides:[],
        recommend:[],
        hotGoods:[],
        category:[],
        floor:[],
        advertesPicture:"",
        swiperOptions:{slidesPerView:3},
        floorName:"居家洁净"
      }
    },
    components:{tabBar,slides,swiper,swiperSlide,floor},
    methods:{
      onSearch(){},
      onCancel(){},
      async getSlidesData(){
        this.slides=(await getSlidesData()).slides;
      },
      async getRecommendData(){
        this.recommend=(await getRecommendData()).recommend;
      },
      async getHotGoodsData(){
        this.hotGoods=(await getHotGoodsData()).hotGoods;
      },
      async getCategoryData(){
        this.category=(await getCategoryData()).category;
      },
      async getAdvertesPicture(){
        this.advertesPicture=(await getAdvertesPicture()).advertesPicture;
      },
      async getFloorData(){
        this.floor=(await getFloorData()).floor
      }
    },
    created(){
      this.getSlidesData();
      this.getAdvertesPicture();
      this.getCategoryData();
      this.getRecommendData();
      this.getHotGoodsData();
      this.getFloorData();
    },
  }
</script>

<style scoped lang="less">
  .category{
    margin-top: 0.2rem;
    clear: both;
    font-size: 0.25rem;
    background-color: #fff;
    padding-top: 0.1rem;
    border-radius:0.1rem ;
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap ;
    div{
      text-align: center;
      padding: .1rem;
    }
  }
  .picture{
    line-height: 1rem;
  }
  .recommend-area{
    .recommend-title{
      font-size: 0.3rem;
      border-bottom:1px solid #eee ;
      text-align: left;
      color: #e11488;
      background-color: #fff;
      padding: 0.05rem  0.1rem;
    }
    .recommend-swiper{
      background-color: #fff;
      border-bottom:1px solid #eee;
      .recommend-item{
        width: 99%;
        border-right:1px solid #eee ;
        font-size: 12px;
        text-align: center;
        p{margin: 0}
      }
    }
  }
  .hot-area{
    .hot-title{
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      margin: 0.1rem 0;
    }
    .good-name,.good-price{
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

</style>
