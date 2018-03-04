<template>
  <div class="discounts">
    <div class="header">
      <img src="../../assets/img/pageimgs/back_arrow.png" alt="" @click="goBack">
      <span>优惠券</span>
      <span @click="exchange = true">兑换</span>
    </div>

    <tab
      class="tab"
      :line-width="2"
      active-color="#72D9C2"
      v-model="index">
      <tab-item
        v-for="(item,ind) in list"
        :key="ind"
        @click.native="tab(ind)">
        {{item.text}}
      </tab-item>
    </tab>

    <div class="cont">
      <unused v-show="num == 0" :CouponValid="CouponValid"></unused>
      <have-been-used v-show="num == 1" :CouponUsed="CouponUsed"></have-been-used>
      <past-due v-show="num == 2" :CouponExpire="CouponExpire"></past-due>
    </div>
    <exchange :exchange="exchange" @Exchange="Exchange"></exchange>
  </div>
</template>

<script>
import Vue from 'vue'
import Unused from './Unused'
import HaveBeenUsed from './HaveBeenUsed'
import PastDue from './PastDue'
import Exchange from './Exchange'
import {Tab, TabItem} from 'vux'

export default {
  components: {
    Unused,
    HaveBeenUsed,
    PastDue,
    Exchange,
    Tab,
    TabItem,
  },
  data () {
    return {
      list: [
				{
          text: '可使用',
				},
				{
					text: '已使用'
				},
				{
					text: '已过期'
				},
      ],
      num: 0,
      exchange: false,
      index: 0,
      CouponValid: '' ,//可使用
      CouponUsed: '',//使用过
      CouponExpire: '', //到期
    }
  },
  mounted () {
    this.$http.get('/api/v1/coupon/').then(res => {
      this.CouponValid = res.data.data.coupon_valid
      this.CouponUsed = res.data.data.coupon_used
      this.CouponExpire = res.data.data.coupon_expire
    })
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    tab(ind) {
      this.num = ind
    },
    Exchange (f) {
      this.exchange = f
    },
  }
}
</script>

<style lang="scss" scoped>
    .header {
      width: 100%;
      height: .44rem;
      line-height: .44rem;
      text-align: center;
      font-size: .17rem;
      color: #fff;
      background-image: linear-gradient(-90deg, #72D98F 0%, #72D9CE 100%);
      position: fixed;
      left: 0;top:0;
      z-index: 99;
      img {
        width: .15rem;
        height: .16rem;
        position: absolute;
        left: .1rem;
        bottom: .15rem;
      }
      span:last-child {
        position: absolute;
        right: .2rem;
        top: 0;
        font-size: .15rem;
        color: #FDFDFD;
      }
    }
    .tab {
      width: 100%;
      height: .48rem;
      background: #FFFFFF;
      box-shadow: 0 1px 0 0 #E8E8E8;
      position: fixed;
      left: 0;top:.44rem;
      display: flex;
      z-index: 100;
      span {
        flex: 1;
        text-align: center;
        display: inline-block;
        margin: 0 .2rem;
        line-height: .48rem;
        font-size: .14rem;
        color: #4A4A4A;
      }
      .active {
        border-bottom: 2px solid #72D9C2;
        color: #72D9C2;
      }
    }
    .list {
      padding-top: .92rem;
    }
    .exchange {
      width: 100%;
      height: 100%;
      background: rgba(51,51,51,0.50);
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;
    }
</style>
