<template>
  <div class="coupon" v-show="coupon">
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
</template>

<script>
export default {
  data () {
    return {
      coupon: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .coupon {
    width: 100%;
    height: 4.4rem;
    background: #fff;
    border-radius: .25rem .25rem 0 0;
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
</style>
