<template>
  <div class="buy">
    <header-item message="提交订单"></header-item>
    <div class="list">
      <dl v-for="(item,index) in get_itembuy.buyData.data" :key="index">
        <dt>
          <img :src="item.courseUrl" alt="">
        </dt>
        <dd>
          <p>{{item.courseName}}</p>
          <p>有效期：<span>{{item.validPeriod}}</span></p>
          <p>¥ <span id="courseOriginPrice">{{item.courseOriginPrice}}</span></p>
          <span id="discountPrice" style="display:none">{{item.courseDiscountPrice}}</span>
        </dd>
      </dl>
    </div>
    <div class="pre">
      <p class="title">优惠信息</p>
      <ul>
        <router-link tag="li" :to="{path: '/selectcoupon', query: {id: this.$route.query.id}}">
          <p>优惠券</p>
          <p><span>{{get_itembuy.couponList.total + get_num}}</span>张可用<img src="../../assets/img/pageimgs/Shape2.png" alt=""></p>
        </router-link>
        <li>
          <p>可用{{get_itembuy.balance}}贝里，抵扣{{get_itembuy.balance/10}}元</p>
          <x-switch title="贝里" class="x-switch"
          @on-change="onChange">
          </x-switch>
        </li>
        <li>
          <p>已优惠￥{{get_itembuy.discountPrice}}</p>
          <p>总计 <b ref="totalPrice">￥{{get_itembuy.priceSum}}</b></p>
        </li>
      </ul>
    </div>
    <div class="alipay">
      <p><img src="../../assets/img/pageimgs/支付宝-3.png" alt="">支付宝 <span>推荐支付宝用户使用</span></p>
      <p><img src="../../assets/img/pageimgs/Checkbox 1.png" alt=""></p>
    </div>
    <div class="foot">
      <span ref="actualPrice">实付款￥{{get_itembuy.actualPrice}}</span>
      <span @click="goPayment">去支付</span>
    </div>
  </div>
</template>

<script>
import HeaderItem from '@/components/header'
import { XSwitch, Group } from 'vux'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'buy',
  components: {
    HeaderItem,
    Group,
    XSwitch
  },
  data () {
    return {
      number: 0,
      isbeili: 0,
      courseOriginPrice: '',
      discountPrice: '',
    }
  },
  mounted () {
   var courseOriginPrice = document.getElementById('courseOriginPrice')
   var discountPrice = document.getElementById('discountPrice')
   this.discountPrice = discountPrice.innerHTML
   this.courseOriginPrice = courseOriginPrice.innerHTML
  },
  methods: {
    ...mapMutations(['GET_ITEMBUY']),
    onChange (val) {
      if (val) {
        this.isbeili = 1
        var data = {
          useBalanceStatus: 1,
          sessionKey: this.session_key,
        }
      } else {
        var data = {
          useBalanceStatus: -1,
          sessionKey: this.session_key,
        }
      }
      this.$http.post('/api/v1/order/balance/', {
        ...data
      }).then(res => {
        this.GET_ITEMBUY(res.data.data)
      })
    },
    getNum(text){
      var value = text.match(/[\d.]/g).join("")
      return Number(value)
    },
    goPayment () {
      var parameter = {
        amount: this.getNum(this.$refs.totalPrice.innerHTML),
        actualPrice: this.getNum(this.$refs.actualPrice.innerHTML),
        globalCouponNumber: this.order_number || null,
        globalBalance: this.isbeili,
        isDegreeCourse: this.$store.state.is_degree_course || null,
        paymentType: 1,
        productArray: [
          {
            courseId: this.$route.query.id,
            validPeriodId: this.valid_periodid,
            courseOriginPrice: Number(this.courseOriginPrice),
            courseDiscountPrice: Number(this.discountPrice),
            couponNumber: this.coupon_number || this.default_number,
          }
        ]
      }
      this.$http.post('/api/v1/order/create/', {
        ...parameter
      }).then(res => {
        location.href = res.data.data.paymentUrl
      })
      // this.$router.push({path: '/BuySucceed', query: {id: this.$route.query.id}})
    },
  },
  computed: {
    ...mapState([
      'get_itembuy',
      'get_num',
      'session_key',
      'valid_periodid',
      'coupon_number',
      'order_number',
      'default_number'
    ])
  }
}
</script>

<style lang="scss" scoped>
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
          width: 1.8rem;
          font-size: .14rem;
          color: #4A4A4A;
          padding-bottom: .17rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
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
          right: .18rem;
          top: .48rem;
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
