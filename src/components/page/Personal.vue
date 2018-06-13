<template>
  <div class="container">
    <div class="base-info">
      <van-icon name="setting" class="user_set" @click="toSetting" />
      <div class="look">
        <img :src="look" alt="">
      </div>
      <div class="info-name">
        <p>爱吃的小瘦子</p>
        <p>普通会员</p>
      </div>
    </div>
    <div class="my-order">
      <van-cell-group>
        <van-cell title="我的订单" isLink>
          <router-link to="" class="text-gray">全部订单</router-link>
        </van-cell>
      </van-cell-group>

      <van-row class="order_status">
        <van-col span="6">
          <div class="order_status_icon" @click="$router.push({path: ''})">
            <van-icon name="daifukuan" />
          </div>
          <div>待付款</div>
        </van-col>
        <van-col span="6">
          <div class="order_status_icon" @click="$router.push({path: ''})">
            <van-icon name="daifahuo" info="1" />
          </div>
          <div>待发货</div>
        </van-col>
        <van-col span="6">
          <div class="order_status_icon" @click="$router.push({path: ''})">
            <van-icon name="wuliu" info="3" />
          </div>
          <div>待收货</div>
        </van-col>
        <van-col span="6">
          <div class="order_status_icon" @click="$router.push({path: ''})">
            <van-icon name="shouhouguanli" />
          </div>
          <div>退款售后</div>
        </van-col>
      </van-row>

    </div>
    <div class="my-card">
      <van-cell-group>
        <van-cell title="我的电子券" isLink>
          <router-link to="/user/orderEle/list/0" class="text-gray">全部电子券</router-link>
        </van-cell>
      </van-cell-group>
      <van-row class="ecoupon_status">
        <van-col span="8">
          <div class="ecoupon_status_icon" @click="$router.push({path: ''})">
            <van-icon name="coupon" />
          </div>
          <div>待使用</div>
        </van-col>
        <van-col span="8">
          <div class="ecoupon_status_icon" @click="$router.push({path: ''})">
            <van-icon name="coupon-used" />
          </div>
          <div>已使用</div>
        </van-col>
        <van-col span="8">
          <div class="ecoupon_status_icon" @click="$router.push({path: ''})">
            <van-icon name="coupon-due" />
          </div>
          <div>过期关闭</div>
        </van-col>
      </van-row>
    </div>
    <div class="user_module">
      <van-cell-group>
        <van-cell icon="shoucang" title="我的收藏" to="/user/collect" isLink />
        <van-cell icon="team" title="我的团队" to="/user/team" isLink />
        <van-cell icon="gold-bean" title="我的金豆" isLink />
        <van-cell icon="dingwei" title="收货地址" to="/user/address" isLink />
        <van-cell icon="id-card" title="实名认证" to="/user/autonym" isLink />
        <van-cell icon="kefu" title="服务中心" to="/user/server" isLink />
      </van-cell-group>
    </div>
    <tabBar :index="3"></tabBar>
  </div>
</template>

<script>
  import tabBar from "../base/tabBar.vue"
  import look from "../../assets/images/avatar_default.png"

  export default {
    data() {
      return {look: look}
    },
    components: {tabBar},
    methods:{
      toSetting(){}
    }
  }
</script>

<style scoped lang="less">
  .container{
    background-color: #dddddd38;
  }
  .my-card{
    margin: 1rem 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    .ecoupon_status{
      background-color: #fff;
      text-align: center;
      padding: 10px 0;
      .ecoupon_status_icon{
        position: relative;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: inline-block;
        i{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          font-size: 2rem;
          color: #000;
        }
      }
    }
  }
  .base-info {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    box-sizing: border-box;
    padding:2rem 3rem;
    background-color: #ffec78;
    .look {
      width: 5.2rem;
      height: 5.2rem;
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    .info-name {
      margin-left: 2rem;
      font-size: 1.2rem;
      p:nth-child(2){
        font-weight: bold;
      }
    }
    i.user_set {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 24px;
      color: aliceblue;
    }
  }
  .my-order{
    margin: 1rem 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    .order_status{
      background-color: #fff;
      text-align: center;
      padding: 10px 0;
      font-size: 16px;
      >div{
      @include one-border;
        &::after{
          top: 50%;
          left: 50%;
          border-bottom: 0;
          border-right: 1px solid #ccc;
          height: 150%;
          transform: scale(.5) translate3d(-50%, -50%, 0);
          transform-origin: 0 0;
        }
        &:last-child::after{
          border: 0;
        }
      }

      .order_status_icon{
        position: relative;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: inline-block;
        i{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          font-size: 2rem;
          color: #000;
        }
      }
    }
  }
  .user_module{
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }

</style>
