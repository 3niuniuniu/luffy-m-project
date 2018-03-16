<template>
 <div>
   <header-item message="支付成功"></header-item>
    <div class="item">
      <img src="../../assets/img/pageimgs/支付成功.png" alt="">
      <p>支付成功</p>
      <p>收到款项<span>{{actual_amount}}</span>元</p>
      <p>成功购买<span v-for="(item,index) in buy_courses" :key="index">{{item}}</span></p>
    </div>
    <div class="btn">
      <button @click="goOrder">查看订单</button>
      <button @click="goStudy">立即学习</button>
    </div>
 </div>
</template>

<script>
  import HeaderItem from '@/components/header'
  export default {
    components: {
      HeaderItem,
    },
    data () {
      return {
        actual_amount: '',
      }
    },
    mounted () {
      this.$http.get('/api/v1/trade/detail/?order_num=' + this.$route.query.order_num).then(res => {
        this.actual_amount = res.data.data.actual_amount
        this.buy_courses = res.data.data.buy_courses
      })
    },
    methods: {
      goOrder () {
        this.$router.push({path: '/my/order'})
      },
      goStudy () {
        this.$router.push({path: '/study'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    margin-top: .44rem;
    text-align: center;
    background: #fff;
    img {
      width: .46rem;
      height: .46rem;
      padding-top: .34rem;
      padding-bottom: .1rem;
    }
    p:nth-of-type(1) {
      font-size: .18rem;
      color: #72D9C0;
    }
    p:nth-of-type(2) {
      font-size: .14rem;
      color: #9B9B9B;
      padding-bottom: .16rem;
    }
    p:nth-of-type(3) {
      font-size: .14rem;
      color: #4A4A4A;
      padding-bottom: .36rem;
    }
  }
  .btn {
    display: flex;
    margin: .24rem .1rem;
    button {
      flex: 1;
      height: .4rem;
      background: #94DCD4;
      border-radius: 4px;
      font-size: .14rem;
      color: #fff;
      border: none;
      cursor: pointer;
    }
    button:nth-of-type(2) {
      background: #f3f5f7;
      color: #666666;
      border: 1px solid #d0d0d0;
      margin-left: .1rem;
    }
  }
</style>
