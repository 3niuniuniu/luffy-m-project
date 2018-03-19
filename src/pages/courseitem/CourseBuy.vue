<template>
  <div>
    <div class="buy">
      <button @click="getTicket">领取优惠券</button>
      <button @click="buyMonth">立即购买</button>
    </div>
    <popup
      v-model="showTicket"
      height="4.4rem"
      >
      <div class="coupon">
        <div class="head">
          <p>{{name}}</p>
          <p>领取优惠劵</p>
        </div>
        <empty :emptyCont="emptyCont" v-if="CouponList.length == 0"></empty>
        <div class="coupons">
          <div class="list" v-for="(item,index) in CouponList" :key="index">
            <p><span>{{item.value}}</span>元</p>
            <p>{{item.coupon_msg}}</p>
            <p>有效期：{{item.valid_date}}</p>
            <button @click="getDiscounts($event)">领取</button>
          </div>
        </div>
        <div class="ok" @click="getTicket">完成</div>
      </div>
    </popup>
    <popup
      v-model="showMonth"
      height="4.4rem"
      >
      <div class="purchase">
        <img src="../../assets/img/pageimgs/Close Icon2.png" alt="" class="close" @click="buyMonth">
        <div class="pricemeal">
          <dl>
            <dt>
              <img :src="img_host + $store.state.img_url" alt="">
            </dt>
            <dd>
              <p>¥{{price}}元</p>
              <p>已选择有效期：<span>{{month}}</span></p>
            </dd>
          </dl>
          <p class="title">价格套餐</p>
          <div class="packagelist">
            <span v-for="(item,index) in Package" :key="index" @click="onPackage($event, item.price, item.valid_period)" :class="{onSpan: index == 0}">{{item.valid_period_name}}</span>
          </div>
          <div class="Confirm" @click="Confirm">确认购买</div>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.use(AlertPlugin)
import Empty from '@/components/empty'
import { Popup, Alert, AlertPlugin } from 'vux'
import { mapState, mapMutations } from 'vuex'

export default {
  props: ['CouponList', 'name', 'Package'],
  components: {
    Popup,
    Alert,
    Empty
  },
  data () {
    return {
      showTicket: false,
      showMonth: false,
      emptyCont: '暂无可领优惠券',
      price: '',
      month: '',
      id: '',
      validPeriodId: '',
      OrderList: '',
      isDegreeCourse: 0,
    }
  },
  mounted () {
    this.$store.state.is_degree_course = this.isDegreeCourse
  },
  methods: {
    ...mapMutations(['GET_ITEMBUY', 'GET_VALIDPERIODLD']),
    Alert () {
      this.$vux.alert.show({
        content: this.error_msg,
      })
    },
    getDiscounts (e) {
      this.$http.get('/api/v1/activity/coupon/?coupon_id=' + this.$route.query.id).then(res => {
        if (res.data.error_no == 0) {
          e.target.innerHTML = '已领取'
          this.error_msg = res.data.data.msg
          this.Alert()
        } else {
          if(res.data.error_msg == '抱歉, 您已领取该优惠券') {
            e.target.innerHTML = '已领取'
            this.error_msg = res.data.error_msg
            this.Alert()
          }
        }
      })
    },
    onPackage (e, price, validPeriodId) {
      $(e.target).addClass('onSpan').siblings().removeClass('onSpan')
      this.month = e.target.innerHTML
      this.price = price
      this.validPeriodId = validPeriodId
    },
    Confirm () {
      var params = {
        amount: this.price,
        productList: [{
          courseId: this.$route.query.id,
          validPeriodId: this.validPeriodId,
          price: this.price,
        }],
        isDegreeCourse: this.isDegreeCourse
      };
      this.$http.post('/api/v1/order/confirm/',
        JSON.stringify(params)
      ).then(res => {
        if (res.data.error_no == 0) {
          this.GET_ITEMBUY(res.data.data)
          this.GET_VALIDPERIODLD(this.validPeriodId)
          this.$router.push({path: '/Buy', query: {id: this.$route.query.id}})
        }
      })
    },
    getTicket () {
      this.showTicket = !this.showTicket
    },
    buyMonth () {
      if (this.price == '' || this.month == '' || this.validPeriodId == '') {
        this.price = this.Package[0].price
        this.month = this.Package[0].valid_period_name
        this.validPeriodId = this.Package[0].valid_period
      }
      this.showMonth= !this.showMonth
    },
  },
  computed: mapState(['img_host'])
}
</script>

<style lang="scss" scoped>
  .buy {
    width: 100%;
    height: .5rem;
    background: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 10px #e0e0e0;
    position: fixed;
    left: 0;
    bottom: 0;
    button {
      flex: 1;
      text-align: center;
      font-size: .14rem;
      line-height: .5rem;
      cursor: pointer;
      border: none;
    }
    button:nth-of-type(1) {
      color: #4A4A4A;
      background: #fff;
    }
    button:nth-of-type(2) {
      color:#fff;
      background: #72D9BC;
    }
  }
  .coupon {
    width: 100%;
    height: 4.4rem;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    overflow: scroll;
    .head {
      width: 100%;
      text-align: center;
      margin-top: .25rem;
      p:nth-of-type(1) {
        font-size: .18rem;
        color: #4A4A4A;
      }
      p:nth-of-type(2) {
        font-size: .12rem;
        color: #9B9B9B;
      }
    }
    .coupons {
      margin-left: .24rem;
      margin-right: .24rem;
      margin-top: .16rem;
      margin-bottom: .5rem;
      .list:last-child {
        border-bottom: none
      }
      .list {
        padding-top: .15rem;
        padding-bottom: .15rem;
        border-bottom: 1px solid #DBDFE2;
        position: relative;
        p:nth-of-type(1) {
          font-size: .12rem;
          color: #FA6240;
          span {
            font-size: .24rem;
          }
        }
        p:nth-of-type(2) {
          font-size: .14rem;
          color: #666666;
          padding-bottom: .03rem;
        }
        p:nth-of-type(3) {
          font-size: .12rem;
          color: #9B9B9B;
        }
        button {
          width: .75rem;
          height: .34rem;
          border: 1px solid #72D9BC;
          border-radius: 2px;
          background: #fff;
          font-size: .14rem;
          color: #72D9BC;
          position: absolute;
          right: 0;
          top: .3rem;
        }
      }
    }
    .ok {
      width: 100%;
      height: .5rem;
      background: #72D9BC;
      color: #fff;
      text-align: center;
      line-height: .5rem;
      font-size: .14rem;
      position: fixed;
      left: 0;
      bottom: 0;
      margin-top: 1rem;
    }
  }
  .purchase {
    width: 100%;
    height: 4.4rem;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    .close {
      width: .14rem;
      height: .14rem;
      position: absolute;
      right: .24rem;
      top: .24rem;
    }
    .pricemeal {
      width: 100%;
      margin-top: .47rem;
      margin-left: .5rem;
      dl {
        display: flex;
        align-items: center;
        dt {
          width: 1rem;
          height: .67rem;
          margin-right: .15rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        dd {
          p:nth-of-type(1) {
            font-size: .24rem;
            color: #FA6240;
          }
          p:nth-of-type(2) {
            font-size: .14rem;
            color: #666666;
          }
        }
      }
      .title {
        padding: .26rem 0;
        font-size: .17rem;
        color: #4A4A4A;
      }
      .packagelist {
        width: 100%;
        span {
          width: 1.3rem;
          height: .4rem;
          text-align: center;
          line-height: .4rem;
          margin-bottom: .23rem;
          margin-right: .14rem;
          display: inline-block;
          background: #FFFFFF;
          border: 1px solid #D0D0D0;
          border-radius: 3px;
          font-size: .15rem;
          color: #666666;
        }
        .onSpan {
          border: none;
          background-image: linear-gradient(-225deg, #72D9C4 0%, #72D997 100%);
          color: #fff;
        }
      }
      .Confirm {
        width: 100%;
        height: .5rem;
        background: #72D9BC;
        color: #fff;
        text-align: center;
        line-height: .5rem;
        font-size: .14rem;
        position: fixed;
        left: 0;
        bottom: 0;
      }
    }
  }
</style>
