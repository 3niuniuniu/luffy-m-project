<template>
  <div class="select">
    <header-item message="选择优惠券"></header-item>
    <div>
      <p class="title" style="padding-top:.6rem">《{{get_name}}》优惠券</p>
      <p class="p1" v-if="get_coupons.length == 0">该课程暂无优惠券</p>
      <div class="list" v-for="(item,index) in get_coupons" :key="index">
        <div>
          <div class="coupon">
            <div class="discount">
              <p>￥<span>{{item.faceVal}}</span></p>
              <p>{{item.couponContent}}</p>
            </div>
            <div class="validtime">
              <p>通用券 <span>{{item.couponRestrict}}</span></p>
              <p>有效期：{{item.couponTimeLimit}}</p>
              <p @click="onCoupon(item.couponNumber)"><img src="../../assets/img/pageimgs/Checkbox 1.png" alt="" v-show="item.default"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="title">订单优惠券</p>
      <div class="list">
        <div>
          <div class="coupon" v-for="(item,index) in get_allcoupons" :key="index">
            <div class="discount">
              <p>￥<span>{{item.faceVal}}</span></p>
              <p>{{item.couponContent}}</p>
            </div>
            <div class="validtime">
              <p>通用券 <span>{{item.couponRestrict}}</span></p>
              <p>有效期：{{item.couponTimeLimit}}</p>
              <p @click="onOrderCoupon(item.couponNumber, item.default)"><img src="../../assets/img/pageimgs/Checkbox 1.png" alt="" v-show="item.default"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ok" @click="ok">确定</div>
  </div>
</template>

<script>
  import HeaderItem from '@/components/header'
  import { mapState, mapMutations } from 'vuex'

  export default {
    components: {
      HeaderItem,
    },
    methods: {
      ...mapMutations(['GET_ITEMBUY']),
      onCoupon (number) {
        this.$store.state.coupon_number = number
        this.$http.post('/api/v1/order/coupon/change/', {
          sessionKey: this.session_key,
          changeCouponNumber: number,
          courseId: Number(this.$route.query.id),
          validPeriodId: this.valid_periodid
        }).then(res => {
          this.GET_ITEMBUY(res.data.data)
        })
      },
      onOrderCoupon (number, isDefault) {
        this.$store.state.order_number = number
        if (isDefault) {
          var parameter = {
            sessionKey: this.session_key,
            changeCouponNumber: '-1',
            courseId: '-1',
            validPeriodId: '-1'
          }
        } else {
          var parameter = {
            sessionKey: this.session_key,
            changeCouponNumber: number
          }
        }
        this.$http.post('/api/v1/order/coupon/change/', {
          ...parameter
        }).then(res => {
          this.GET_ITEMBUY(res.data.data)
        })
      },
      ok () {
        this.$router.go(-1)
      }
    },
    computed: {
      ...mapState([
        'get_coupons',
        'get_allcoupons',
        'session_key',
        'valid_periodid',
        'get_itembuy',
        'get_name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    padding: .15rem .1rem;
    font-size: .15rem;
    color: #4A4A4A;
  }
  .p1 {
    text-align: center;
    font-size: .14rem;
    color: #9D9D9D;
    width: 96%;
    height: auto;
    background: #fff;
    margin: 0 auto;
    padding: .3rem;
    box-sizing: border-box;
  }
  .coupon {
    width: 96%;
    height: auto;
    background: #fff;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: .15rem;
    .discount {
      width: .8rem;
      padding: 0 .1rem;
      border-right: 1px dashed #d0d0d0;
      text-align: center;
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
      flex: 1;
      margin-left: .16rem;
      margin-top: .2rem;
      margin-bottom: .2rem;
      position: relative;
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
      p:nth-of-type(3) {
        width: .24rem;
        height: .24rem;
        border: 1px solid #E8E8E8;
        border-radius: 100%;
        position: absolute;
        right: .2rem;
        top: 0;
        img {
          width: 100%;
          height: 100%;
        }
        .show {
          display: inline-block;
        }
      }
    }
  }
  .coupon:last-child {
    margin-bottom: .21rem;
  }
  .ok {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .5rem;
    color: #fff;
    text-align: center;
    line-height: .5rem;
    background: #72D9BC;
    font-size: .14rem;
  }
</style>
