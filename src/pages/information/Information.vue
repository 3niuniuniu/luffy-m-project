<template>
  <div class="information">
    <header-item message="我的资料"></header-item>
    <div v-transfer-dom>
      <confirm
      v-model="show"
      :close-on-confirm="false"
      @on-confirm="onConfirm">
        <p style="text-align:center;">{{ ('确定退出?') }}</p>
      </confirm>
    </div>
    <ul class="cont">
      <li>
        <span class="type">头像</span>
        <img :src="userInfo.head_img" alt="">
      </li>
      <li>
        <span class="type">用户名</span>
        <span class="user">{{userInfo.username}}</span>
      </li>
      <li>
        <span class="type">性别</span>
        <span class="user">{{userInfo.gender}}</span>
      </li>
      <li>
        <span class="type">生日</span>
        <span class="user">{{userInfo.birthday}}</span>
      </li>
    </ul>
    <ul class="cont">
      <li>
        <span class="type">Q Q</span>
        <span class="user">{{userInfo.qq}}</span>
      </li>
      <li>
        <span class="type">微信</span>
        <span class="user">{{userInfo.weixin}}</span>
      </li>
      <li>
        <span class="type">现居</span>
        <span class="user">{{userInfo.city}}</span>
      </li>
      <li>
        <span class="type">学历</span>
        <span class="user">{{userInfo.degree}}</span>
      </li>
    </ul>
    <div class="exit" @click="exit">
      退出当前账号
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  Vue.use(ConfirmPlugin)
  Vue.use(LoadingPlugin)
  import HeaderItem from '@/components/header'
  import { ConfirmPlugin, LoadingPlugin, Confirm, TransferDomDirective as TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      HeaderItem,
      Confirm,
    },
    data () {
      return {
        userInfo: '',
        show: false
      }
    },
    mounted () {
      this.$http.get('/api/v1/personal/').then(res => {
        this.userInfo = res.data.data
      })
    },
    methods: {
      onConfirm () {
        this.$http.get('/api/v1/account/logout/')
        .then((res) =>{
          if(res.data.error_no == 0){
            this.$vux.loading.show({
              transition: '',
              text: '退出中...'
            })
            setTimeout(() => {
              this.$vux.loading.hide()
              this.show = false
            }, 1000)
          }
        })
        .catch((res) => {
          console.log(1)
        })
      },
      exit () {
        this.show = true
      },
    }
  }
</script>

<style lang="scss" scoped>
  .information {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .cont {
    background: #fff;
    li {
      margin-left: .3rem;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: .22rem;
      padding-top: .2rem;
      padding-bottom: .14rem;
      .type {
        font-size: .15rem;
        color: #4A4A4A;
        font-weight: bold;
      }
      .user {
        padding-right: .1rem;
        font-size: .14rem;
        color: #666666;
      }
      img {
        width: .6rem;
        height: .6rem;
        border-radius: 100%;
      }
    }
  }
  .cont:nth-of-type(1){
    margin-top: .44rem;
    margin-bottom: .2rem;
  }
  .exit {
    width: 100%;
    height: .5rem;
    background: #fff;
    text-align: center;
    font-size: .14rem;
    color: #FA6240;
    line-height: .5rem;
    cursor: pointer;
    position: fixed;
    left: 0;
    bottom: 0;

  }
</style>
