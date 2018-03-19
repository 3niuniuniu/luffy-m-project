<template>
  <div class="used">
    <div class="coupon" v-for="(item, index) in CouponUsed.result" :key="index">
      <img src="../../assets/img/pageimgs/已使用.png" alt="">
      <div class="discount">
        <p>￥<span>{{item.value}}</span></p>
        <p>{{item.coupon_msg}}</p>
      </div>
      <div class="validtime">
        <p>通用券 <span>{{item.coupon_limit}}</span></p>
        <p>有效期：{{item.valid_date_from}} 至 {{item.valid_date_to}}</p>
      </div>
    </div>
    <empty v-if="CouponUsed.count == 0" :emptyCont="emptyCont"></empty>
  </div>
</template>

<script>
import Empty from '@/components/empty'

export default {
  props: ['CouponUsed'],
  data () {
    return {
      emptyCont: '您还未使用过优惠券哦'
    }
  },
}
</script>

<style lang="scss" scoped>
  .used {
    padding: .1rem;
    padding-top: 1rem;
    overflow: scroll;
    background: #f3f5f7;
    .coupon {
      width: 100%;
      height: auto;
      background: #fff;
      border-radius: 2px;
      display: flex;
      margin-bottom: .15rem;
      align-items: center;
      position: relative;
      img {
        width: .62rem;
        height: auto;
        position: absolute;
        right: 0;
        top: 0;
      }
      .discount {
        width: .8rem;
        padding: 0 .1rem;
        border-right: 1px dashed #d0d0d0;
        text-align: center;
        color: #9b9b9b;
        font-family: PingFangSC-Regular;
        p:nth-of-type(1) {
          font-size: .12rem;
          span {
            display: inline-block;
            font-size: .24rem;
          }
        }
        p:nth-of-type(2) {
          color: #9B9B9B;
          padding-top: .02rem;
        }
      }
      .validtime {
        margin-left: .16rem;
        margin-top: .2rem;
        margin-bottom: .2rem;
        p:nth-of-type(1) {
          font-size: .14rem;
          color: #4A4A4A;
          span {
            display: inline-block;
            font-size: .12rem;
            color: #9B9B9B;
          }
        }
        p:nth-of-type(2) {
          color: #9B9B9B;
          margin-top: .07rem;
        }
      }
    }
  }
</style>
