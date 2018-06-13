<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import "assets/iconfont/iconfont.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .van-swipe{
    max-height:3.5rem;
  }
  .van-search__cancel {
    color: orange;
  }
  .text-gray{
    color: gray;
  }
  .element.style {
  }
  .van-cell{
    font-size: 16px
  }
  .van-cell__right-icon{
  }
  .van-cell__title{
    font-size: 18px;
  }
  .van-card{
    background-color: #fff;
  }
  .van-card__title{
  }
  .van-submit-bar__price{
  }
</style>
