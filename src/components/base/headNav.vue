<template>
  <van-nav-bar class="navBar" :title="title" left-arrow right-text="...">
  </van-nav-bar>
</template>

<script>
  export default {
    name: "head-nav",
    props:["title"]
  }
</script>

<style>
  .van-nav-bar__text{
    font-weight:bold;
    font-size: 16px;
    color: #282828;
    letter-spacing: 2px;
  }
  .van-nav-bar .van-icon{
    color: orange;
  }
  .van-nav-bar__title{
    color: orange;
  }
</style>
