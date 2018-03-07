<template>
  <div class="order">
    <header-item message="我的订单"></header-item>
      <loading v-show="loading" class="loading"></loading>
      <div v-show="!loading">
        <div class="module" v-for="(item, index) in orderList" :key="index">
          <p class="orderNum">订单号：{{item.order_number}} <span>{{item.status}}</span></p>
          <dl v-for="(val,ind) in item.course_item" :key="ind">
            <dt><img :src="val.course_img" alt=""></dt>
            <dd>
              <p><span>{{val.course_name}}</span><span>¥ {{val.price}}</span></p>
              <p><span>有效期：{{val.valid_period_display}}</span><span>¥ {{val.original_price}}</span></p>
            </dd>
          </dl>
          <div class="discounts">
            <p><span>优惠券</span> <span>7折</span></p>
            <p><span>贝里</span> <span>300ge</span></p>
            <p><span>实付</span><span>￥{{item.actual_amount}}</span></p>
            <p><span>下单时间：<br>{{item.date}}</span> <button>{{item.handle}}</button></p>
          </div>
        </div>
      </div>
      <empty-page :empitCont="empitCont" v-show="empty"></empty-page>
  </div>
</template>

<script>
  import HeaderItem from '@/components/header'
  import Loading from '@/components/loading'
  import EmptyPage from '../emptyPage/emptyPage'

  export default {
    components: {
      HeaderItem,
      Loading,
      EmptyPage,
    },
    data () {
      return {
        orderList: '',
        empitCont: '暂无订单',
        loading: true,
        empty: false,
      }
    },
    mounted () {
      this.$http.get('/api/v1/personal/my_orders/').then(res => {
        this.loading = false
        this.orderList = res.data.data
        if(this.orderList.length == 0) {
          this.empty = true
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .order{
    .loading {
      margin-top: .6rem;
    }
    .module {
      background: #fff;
      margin-bottom: .2rem;
      .orderNum {
        padding-left: .2rem;
        padding-top: .16rem;
        padding-bottom: .16rem;
        color: #666666;
        font-size: .12rem;
        box-shadow: 0 1px 0 0 #E9E9E9;
        span {
          color: #4A4A4A;
          float: right;
          padding-right: .24rem;
        }
      }
      dl {
        display: flex;
        border-bottom: 1px solid #f5f5f5;
        dt{
          width: 1rem;
          height: .67rem;
          padding: .2rem;
          img {
            width: 100%;
            height: 100%
          }
        }
        dd {
          padding-top: .3rem;
          flex: 1;
          p{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: .2rem;
          }
          p:nth-of-type(1){
            font-size: .14rem;
            color: #4A4A4A;
            padding-bottom: .1rem;
          }
          p:nth-of-type(2){
            font-size: .12rem;
            color: #4A4A4A;
            span:nth-of-type(2) {
              font-size: .14rem;
              color: #D0D0D0;
            }
          }
        }
      }
      .discounts {
        margin-left: .3rem;
        padding-right: .2rem;
        p {
          display: flex;
          justify-content: space-between;
          padding-bottom: .1rem;
          span:first-child {
            font-size: .14rem;
            color: #666666;
          }
          span:last-child {
            font-size: .14rem;
            color: #333333;
          }
        }
        p:nth-of-type(1) {
          padding-top: .2rem;
          padding-bottom: .1rem;
        }
        p:nth-of-type(2) {
          padding-bottom: .2rem;
          border-bottom: 1px solid #F5F5F5;
        }
        p:nth-of-type(3) {
          padding: .17rem 0;
          border-bottom: 1px solid #F5F5F5;
          justify-content: flex-end;
          align-items: center;
          span:nth-of-type(2) {
            font-size: .18rem;
            color: #FA6240;

          }
        }
        p:nth-of-type(4) {
          padding: .2rem 0;
          span:nth-of-type(1) {
            font-size: .12rem;
            color: #9B9B9B;
          }
          button {
            width: .84rem;
            height: .31rem;
            font-size: .14rem;
            background: #72D9C0;
            border: none;
            color: #fff;
          }
        }
      }
    }
    .module:first-child{
      margin-top: .4rem;
    }
    .module:last-child{
      margin-bottom: -.2rem;
    }
  }
</style>
