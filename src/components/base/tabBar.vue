<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="wap-nav" to="/list">分类</van-tabbar-item>
    <van-tabbar-item icon="cart" info="5" to="/car">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact" info="20" to="/personal">我的</van-tabbar-item>

  </van-tabbar>
</template>

<script>
  export default {
    name: "tabBar",
    data() {
      return {
        active:0
      }
    },
    props:["index"],
    created(){
      this.active=this.index
    }
  }
</script>

<style scoped>

  .van-tabbar-item--active{
    color: orange;
  }
</style>
