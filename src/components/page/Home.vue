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
    <swiper :autoplay="3000" :images="images"></swiper>
  </div>
  <tabBar :index="0"></tabBar>
</div>
</template>

<script>
  import tabBar from "../base/tabBar.vue"
  import swiper from "../base/swiper.vue"
  import {getData} from "../../api";

  export default {
    data(){
      return {
        value:"酸奶",
        images:[]
      }
    },
    components:{tabBar,swiper},
    methods:{
      onSearch(){

      },
      onCancel(){

      },
      async getData(){
        let data=await getData();
        this.images=data.slides;
        console.log(this.images);
      }
    },
    created(){
      this.getData();
      //console.log(this.images);
    },
    mounted(){
      this.$nextTick(()=>{
      })
    },
  }
</script>

<style scoped>
  .swiper-area{
    clear: both;
    max-height: 13rem;
  }
</style>
