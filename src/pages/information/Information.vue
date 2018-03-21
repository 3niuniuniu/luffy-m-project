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
        <img :src="img_host + userInfos.head_img" alt="" v-if="userInfo">
      </li>
      <li>
        <span class="type">用户名</span>
        <span class="user" v-if="userInfo">{{userInfos.username}}</span>
      </li>
      <li>
        <span class="type">性别</span>
        <span class="user" v-if="userInfo">{{userInfos.gender}}</span>
      </li>
      <li>
        <span class="type">生日</span>
        <span class="user" v-if="userInfo">{{userInfos.birthday}}</span>
      </li>
    </ul>
    <ul class="cont">
      <li>
        <span class="type">Q Q</span>
        <span class="user" v-if="userInfo">{{userInfos.qq}}</span>
      </li>
      <li>
        <span class="type">微信</span>
        <span class="user" v-if="userInfo">{{userInfos.weixin}}</span>
      </li>
      <li>
        <span class="type">现居</span>
        <span class="user" v-if="userInfo">{{userInfos.city}}</span>
      </li>
      <li>
        <span class="type">学历</span>
        <span class="user" v-if="userInfo">{{userInfos.degree}}</span>
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
  import { mapState, mapMutations } from 'vuex'

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
        userInfos: '',
        userInfo: {
          token: '',
          username: '',
          balance: '',
        },
        show: false
      }
    },
    watch: {
      $route() {
        this.getUserInfo()
      }
    },
    mounted () {
      this.getUserInfo();
    },
    methods: {
      ...mapMutations(['GET_USERINFO']),
      getUser () {
        this.$http.get('/api/v1/personal/').then(res => {
          this.userInfos = res.data.data
        })
      },
      getUserInfo() {
        const info = window.localStorage.getItem('userInfo');
        if (info != '') {
          this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
          this.getUser()
        } else {
          this.userInfos = ''
          this.userInfo = {
            token: '',
            username: '',
            balance: '',
          };
        }
      },
      onConfirm () {
        this.$http.get('/api/v1/account/logout/')
        .then((res) =>{
          window.localStorage.setItem('userInfo', '');
          if(res.data.error_no == 0){
            this.$vux.loading.show({
              transition: '',
              text: '退出中...'
            })
            setTimeout(() => {
              this.$vux.loading.hide()
              this.show = false
              this.$router.push({path: '/my'})
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
    },
    computed: {
      ...mapState(['img_host'])
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
