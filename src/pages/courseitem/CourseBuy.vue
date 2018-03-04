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
          <p>爬虫开发课程</p>
          <p>领取优惠劵</p>
        </div>
        <div class="coupons">
          <div class="list">
            <p><span>30</span>元</p>
            <p>该课程满300元可用</p>
            <p>有效期：2017.08.01-2017.12.30</p>
            <button>领取</button>
          </div>
          <div class="list">
            <p><span>30</span>元</p>
            <p>该课程满300元可用</p>
            <p>有效期：2017.08.01-2017.12.30</p>
            <button>领取</button>
          </div>
          <div class="list">
            <p><span>30</span>元</p>
            <p>该课程满300元可用</p>
            <p>有效期：2017.08.01-2017.12.30</p>
            <button>领取</button>
          </div>
          <div class="list">
            <p><span>30</span>元</p>
            <p>该课程满300元可用</p>
            <p>有效期：2017.08.01-2017.12.30</p>
            <button>领取</button>
          </div>
        </div>
        <div class="ok" @click="coupon = false">完成</div>
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
              <img src="../../assets/img/pageimgs/banner2.png" alt="">
            </dt>
            <dd>
              <p>¥66元</p>
              <p>已选择有效期：<span>1个月</span></p>
            </dd>
          </dl>
          <p class="title">价格套餐</p>
          <div class="list">
            <span>一个月</span>
            <span>两个月</span>
            <span>三个月</span>
          </div>
          <div class="Confirm" @click="Confirm">确认购买</div>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import {Popup} from 'vux'
export default {
  components: {
    Popup
  },
  data () {
    return {
      showTicket: false,
      showMonth: false
    }
  },
  methods: {
    Confirm () {
      this.$router.push('/Buy')
    },
    getTicket () {
      this.showTicket = !this.showTicket
    },
    buyMonth () {
      this.showMonth= !this.showMonth
    }
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
    }
    button:nth-of-type(1) {
      color: #4A4A4A;
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
    // border-radius: .2rem .2rem 0 0;
    position: fixed;
    left: 0;
    bottom: 0;
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
    }
  }
  .purchase {
    width: 100%;
    height: 4.4rem;
    background: #fff;
    // border-radius: .2rem .2rem 0 0;
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
      .list {
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
          background-image: linear-gradient(-225deg, #72D9C4 0%, #72D997 100%);
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
