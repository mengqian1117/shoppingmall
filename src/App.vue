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

  .van-search__cancel {
    color: orange;
  }
  .text-gray{
    color: gray;
  }
  .element.style {
  }
  .van-cell{
    font-size: 16px;
    line-height: 2rem;
  }
  .van-cell__right-icon{
    line-height: 2.1rem;
  }
  .van-cell__title{
    font-size: 18px;
  }
  .van-card{
    background-color: #fff;
  }
  .van-card__title{
    margin-bottom: 0.5rem;
  }
  .van-submit-bar__price{
    font-size: 1.2rem;
  }
</style>
