<template>
  <div class="select">
    <header-item message="选择优惠券"></header-item>
    <div class="list">
      <p class="title">《爬虫开发课程》优惠券</p>
      <div>
        <div class="coupon">
          <div class="discount">
            <p>￥<span>30</span></p>
            <p>满500元可用</p>
          </div>
          <div class="validtime">
            <p>通用券 <span>全场通用</span></p>
            <p>有效期：2017.08.01-2017.12.30</p>
            <p><img src="../../assets/img/pageimgs/Checkbox 1.png" alt=""></p>
          </div>
        </div>
      </div>
    </div>
    <div class="ok">确定</div>
  </div>
</template>

<script>
  import HeaderItem from '@/components/header'
  export default {
    components: {
      HeaderItem,
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    margin-top: .44rem;
    .title {
      padding: .15rem .1rem;
      font-size: .15rem;
      color: #4A4A4A;
    }
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
          display: none;
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
