<template>
  <div class="my">
    <div class="title">
      <div class="user">
        <img src="../../assets/img/pageimgs/defaulthead.png" alt="" v-show="!userInfo.token">
        <img :src="userInfo.userImg" alt="" v-show="userInfo.token">
        <p>
          <span v-show="!userInfo.token" class="NotLogin" @click="goLogin">点击登录</span>
          <span v-show="userInfo.token" class="name">{{userInfo.username}}</span><br>
          <span v-show="userInfo.token" class="num">贝里余额 {{userInfo.balance}}个</span>
        </p>
      </div>
      <div class="myMessage">
        <ul>
          <router-link to="/my/information" tag="li">
            <img src="../../assets/img/icon/资料.png" alt="">
            <p>我的资料</p>
            <img src="../../assets/img/pageimgs/Shape2.png" alt="">
          </router-link>
          <router-link to="/my/order" tag="li">
            <img src="../../assets/img/icon/订单.png" alt="">
            <p>我的订单</p>
            <img src="../../assets/img/pageimgs/Shape2.png" alt="">
          </router-link>
          <router-link to="/my/discounts" tag="li">
            <img src="../../assets/img/icon/优惠券.png" alt="">
            <p>优惠券</p>
            <span v-if="this.$store.state.available_coupon_num == 0">可兑换</span>
            <span v-else-if="userInfo.token" class="sp">{{this.$store.state.available_coupon_num}}张可用</span>
            <img src="../../assets/img/pageimgs/Shape2.png" alt="">
          </router-link>
        </ul>
      </div>
      <div class="myMessage">
        <ul>
          <router-link to="/my/question" tag="li">
            <img src="../../assets/img/icon/问题.png" alt="">
            <p>常见问题</p>
            <img src="../../assets/img/pageimgs/Shape2.png" alt="">
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      userInfo: {
        token: '',
        username: '',
        balance: '',
      },
    };
  },
  watch: {
    $route() {
      this.getUserInfo();
    },
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    goLogin () {
      this.$router.push({path: '/login'})
    },
    getUserInfo() {
      const info = window.localStorage.getItem('userInfo');
      if (info != '') {
        this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
      } else {
        this.userInfo = {
          token: '',
          username: '',
          balance: '',
        };
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .title {
    width: 100%;
    height: 1.57rem;
    background-image: linear-gradient(-45deg, #72D98F 0%, #72D9CE 100%);
  }
  .user {
    display: flex;
    align-items: center;
    padding-top: .8rem;
    padding-left: .28rem;
    color: #FFF;
    img {
      width: .6rem;
      height: .6rem;
      border-radius: 100%;
      margin-right: .13rem;
    }
    .name {
      font-size: .24rem;
    }
    .num {
      font-size: .13rem;
    }
    .NotLogin {
      font-size: .24rem;
    }
  }
  .myMessage {
    width: 100%;
    height: auto;
    background: #fff;
    margin-top: .18rem;
    ul {
      margin-left: .34rem;
      p {
        font-size: .15rem;
        color: #4A4A4A;
      }
      li {
        display: flex;
        align-items: center;
        padding: .18rem 0;
        border-bottom: 1px solid #F5F5F5;
        position: relative;
        cursor: pointer;
        img:nth-of-type(1) {
          width: .24rem;
          height: .24rem;
          margin-right: .11rem;
        }
        img:nth-of-type(2) {
          width: .07rem;
          height: .12rem;
          position: absolute;
          right:.32rem;top: .24rem;
        }
        span {
          display: inline-block;
          font-size: .12rem;
          color: #666666;
          position: absolute;
          right:.5rem;top: .22rem;
        }
        .sp {
          color: #FA6240;
        }
      }
    }
  }
</style>
