<template>
  <van-swipe :autoplay="autoplay">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image.image" width="100%"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name: "swiper",
    props:["autoplay","images"],
    created(){
      console.log(this.images);
    }
  }
</script>

<style scoped>

</style>
