<template>
  <div class="box">
    <div class="buy">
      <button @click="getTicket">领取优惠券</button>
      <button @click="goBuy">立即购买</button>
    </div>
    <popup
      v-model="showTicket"
      height="4.4rem"
      >
      <div class="coupon">
        <empty :emptyCont="emptyCont"></empty>
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
              <img src="../../assets/img/pageimgs/python-banner中级.png" alt="">
            </dt>
            <dd>
              <p>¥{{price}}元</p>
              <p>已选择 <span>{{course}}</span></p>
            </dd>
          </dl>
          <p class="title">价格套餐</p>
          <div class="packagelist">
            <span @click="onPackage($event)" class="onSpan">Deluxe套餐</span>
            <span @click="onPackage($event)">SVIP套餐</span>
            <span @click="onPackage($event)">VVIP套餐</span>
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
  components: {
    Empty,
    Popup,
    Alert,
  },
  data () {
    return {
      emptyCont: '暂无可领优惠券',
      showTicket: false,
      showMonth: false,
      course: 'Deluxe套餐',
      price: 8999,
      validPeriodId: 720,
      isDegreeCourse: 1,
    }
  },
  mounted () {
    this.$store.state.is_degree_course = this.isDegreeCourse
  },
  methods: {
    ...mapMutations(['GET_ITEMBUY', 'GET_VALIDPERIODLD']),
    getTicket () {
      this.showTicket = !this.showTicket
    },
    buyMonth () {
      this.showMonth= !this.showMonth
    },
    onPackage (e) {
      this.course = e.target.innerHTML
      if (this.course == 'Deluxe套餐') {
        this.price = 8999
        this.validPeriodId = 720
      } else if (this.course == 'SVIP套餐') {
        this.price = 19800
        this.validPeriodId = 722
      } else if (this.course == 'VVIP套餐') {
        this.price = 59800
        this.validPeriodId = 723
      }
      $(e.target).addClass('onSpan').siblings().removeClass('onSpan')
    },
    Confirm () {
      var params = {
        amount: this.price,
        productList: [{
          courseId: this.$route.query.id,
          validPeriodId: this.validPeriodId,
          price: this.price,
        }],
        isDegreeCourse: this.isDegreeCourse,
      };
      this.$http.post('/api/v1/order/confirm/',
        JSON.stringify(params)
      ).then(res => {
        if (res.data.error_no == 0) {
          this.GET_ITEMBUY(res.data.data)
          this.GET_VALIDPERIODLD(this.validPeriodId)
          this.$router.push({path: '/Buy', query: {id: this.$route.query.id}})
        } else if (res.data.error_no == 2) {
          this.$router.push({path: '/login', query: {redirect: `/course/courseitem?id=${this.$route.query.id}`}})
        }
      })
    },
    goBuy () {
      if (this.$route.name == 'python-medium') {
        this.showMonth= !this.showMonth
        if (this.price == '' && this.course == '') {
          this.price = 8999
          this.course = 'Deluex套餐'
        }
      } else {
        if (this.$route.name == 'python-advanced') {
          this.price = 7999
          this.validPeriodId = 720
        } else if (this.$route.name == 'linux-medium') {
          this.price = 8500
          this.validPeriodId = 720
        } else if (this.$route.name == 'linux-advanced') {
          this.price = 6500
          this.validPeriodId = 720
        }
        this.Confirm()
        this.$router.push({path: '/Buy', query: {id: this.$route.query.id}})
      }
    },
  }
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
