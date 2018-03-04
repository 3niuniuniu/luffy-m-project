<template>
  <div class="buy">
    <header-item message="提交订单"></header-item>
    <div class="list">
      <dl>
        <dt>
          <img src="../../assets/img/pageimgs/banner2.png" alt="">
        </dt>
        <dd>
          <p>爬虫开发实战课程</p>
          <p>有效期：<span>3个月</span></p>
          <p>¥ <span>399</span></p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../assets/img/pageimgs/banner2.png" alt="">
        </dt>
        <dd>
          <p>爬虫开发实战课程</p>
          <p>有效期：<span>3个月</span></p>
          <p>¥ <span>399</span></p>
        </dd>
      </dl>
    </div>
    <div class="pre">
      <p class="title">优惠信息</p>
      <ul>
        <router-link tag="li" to="/selectcoupon">
          <p>优惠券</p>
          <p><span>3</span>张可用<img src="../../assets/img/pageimgs/Shape2.png" alt=""></p>
        </router-link>
        <li>
          <p>可用10贝里，抵扣0.1元</p>
          <x-switch title="贝里" v-model="value" class="x-switch"></x-switch>
        </li>
        <li>
          <p>已优惠￥39</p>
          <p>总计 <b>￥399</b></p>
        </li>
      </ul>
    </div>
    <div class="alipay">
      <p><img src="../../assets/img/pageimgs/支付宝-3.png" alt="">支付宝 <span>推荐支付宝用户使用</span></p>
      <p><img src="../../assets/img/pageimgs/Checkbox 1.png" alt=""></p>
    </div>
    <div class="foot">
      <span>实付款￥360</span>
      <span @click="goPayment">去支付</span>
    </div>
  </div>
</template>

<script>
import HeaderItem from '@/components/header'
import { XSwitch } from 'vux'

export default {
  components: {
    HeaderItem,
    XSwitch
  },
  methods: {
    goPayment () {
      this.$router.push({path: '/BuySucceed'})
    }
  }
}
</script>

<style lang="scss" scoped>
  // .weui-switch:checked, .weui-switch-cp__input:checked ~ .weui-switch-cp__box {
  //   border-color: #72D9BC !important;
  //   background-color: #72D9BC !important;
  // }
  .list {
    margin-top: .44rem;
    dl {
      width: 100%;
      height: auto;
      padding: .2rem;
      background: #FFFFFF;
      box-shadow: 0 1px 0 0 rgba(245,245,245,0.10);
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f3f5f7;
      dt {
        width: 1rem;
        height: .67rem;
        margin-right: .2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        p:nth-of-type(1) {
          font-size: .14rem;
          color: #4A4A4A;
          padding-bottom: .17rem;
        }
        p:nth-of-type(2) {
          font-size: .12rem;
          color: #9B9B9B;
          span {
            color: #000000;
          }
        }
        p:nth-of-type(3) {
          font-size: .14rem;
          color: #FA6240;
          position: absolute;
          right: .2rem;
          top: .4rem;
        }
      }
    }
    dl:last-child {
      margin-bottom: .15rem;
      border-bottom: none;
    }
  }
  .pre {
    background: #fff;
    width: 100%;
    height: auto;
    .x-switch {
      width: 100%;
    }
    .title {
      font-size: .14rem;
      color: #9B9B9B;
      padding-left: .3rem;
      padding-top: .16rem;
      padding-bottom: .16rem;
      border-bottom: 1px solid #F5F5F5;
    }
    ul {
      li {
        padding: .16rem 0;
        margin-left: .33rem;
        padding-right: .33rem;
        border-bottom: 1px solid #F5F5F5;
        font-size: .14rem;
        color: #4A4A4A;
        display: flex;
        align-items: center;
        img {
          width: .07rem;
          height: .12rem;
          margin-left: .12rem;
        }
      }
      li:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        p:nth-of-type(1) {
          float: left;
        }
        p:nth-of-type(2) {
          font-size: .12rem;
          color: #9B9B9B;
          display: flex;
          align-items: center;
        }
      }
      .weui-cell {
        padding: .16rem 0 !important;
        padding-right: .33rem !important;
      }
      .weui-cell:before {
        border-top: none !important;
      }
      li:nth-of-type(2) {
        padding: 0;
        position: relative;
        p:nth-of-type(1) {
          position: absolute;
          left: .3rem;
          font-size: .12rem;
          color: #9B9B9B;
          padding-left: .2rem;
        }
      }
      li:nth-of-type(3) {
        display: flex;
        justify-content: space-between;
        p:nth-of-type(1) {
          font-size: .12rem;
          color: #F5A623;
        }
        p:nth-of-type(2) {
          font-size: .14rem;
          color: #4A4A4A;
          b {
            font-size: .18rem;
            color: #333333;
          }
        }
      }
    }
  }
  .alipay {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .18rem .33rem;
    margin-top: .2rem;
    background: #fff;
    img {
      width: .24rem;
      height: .24rem;
    }
    img:first-child {
      margin-right: .06rem;
    }
    p {
      font-size: .14rem;
      color: #4A4A4A;
      display: flex;
      align-items: center;
      span {
        font-size: .12rem;
        color: #9B9B9B;
        margin-left: .16rem;
      }
    }
  }
  .foot {
    width: 100%;
    height: .5rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    line-height: .5rem;
    font-size: .14rem;
    span:nth-of-type(1){
      width: 60%;
      background: #fff;
      padding-left: .2rem;
      font-size: .16rem;
    }
    span:nth-of-type(2) {
      flex: 1;
      background: #72D9BC;
      color: #fff;
      text-align: center;
      font-size: .14rem;
    }
  }
</style>
