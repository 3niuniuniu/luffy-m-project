<template>
  <div class="box" ref="login">
    <div class="reg_cont">
      <div class="reg_box">
        <img src="../../assets/img/pageimgs/Close.png" alt="" class="close" @click="close">
        <div class="zi" ref="text">找回你的密码</div>
        <div class="inp">
          <span class="error" ref="error"></span>
  <!-- 找密码第一步 !-->
          <div class="step1" v-show="step1">
            <select name="" id="" class="phone_select" v-model="nationCode">
              <option value="86" selected>中国 (+86)</option>
              <option v-for="(item, index) in nationCodes" :key="index" :value="item.nation_code">{{item.nation_name}} (+{{item.nation_code}})</option>
            </select>
            <input type="text" class="phone" placeholder="输入手机号码" v-model="phone">
            <div class="verify_box">
              <input type="text" class="verify" placeholder="输入验证码" v-model="verify">
              <p class="get_verify" @click="getVerify" ref="num">获取验证码</p>
            </div>
            <button class="next_one" @click="nextOne">下一步</button>
            <p class="go_login" @click="goLogin">已有账号 <span>直接登录</span></p>
          </div>
  <!-- 找密码第二步 !-->
          <div class="step2" v-show="step2">
            <input type="password" class="pwd1" placeholder="新密码至少6位且不能全是数字" v-model="newPwd1">
            <input type="password" class="pwd2" placeholder="再次确认密码" v-model="newPwd2">
            <button class="next_one next_two" @click="Ok">完成</button>
          </div>
  <!-- 找密码完成 !-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

export default {
  data () {
    return {
      step1: true, //找密码step1
      step2: false, //找密码step2
      phone: '',//手机号
      verify: '',//验证码
      num: 60,
      error: '',//报错信息
      newPwd1: '',//新密码1
      newPwd2: '',//新密码2
      nationCode: "86",
      nationCodes: []
    }
  },
  mounted () {
    $(function(){
      $(document).find("input").on("focus",function(){
        $('.error').html('')
      })
    })
    $(document).find("select").on("focus",function(){
      $('.error').html('')
    })
    this.getNation()
  },
  methods: {
    goLogin () {
      this.$router.push('/login')
    },
    close () {
      const loginEle = this.$refs.login;
      loginEle.className = 'exit-forget';
      setTimeout(() => {
        this.$router.push('/my')
      }, 200);
    },
    getNation () {
      this.$http.get('/api/v1/nation/').then((res) => {
        if(res.data.error_no==0){
          this.nationCodes = res.data.data
        }
      })
    },
    nextOne () {
      if (this.phone == '' || this.verify == '') {
        this.$refs.error.innerHTML = '请输入手机号并获取验证码'
      } else if (this.verify.length < 6) {
        this.$refs.error.innerHTML = '验证码输入有误'
      } else {
        this.$http.post('/api/v1/actions/send_sms/',{
          validationPhone: this.phone,
          authCode: this.verify,
          verifyType: 'forget_password'
        }).then(res => {
          if(res.data.error_no == 0) {
            this.step1 = false
            this.step2 = true
            this.$refs.text.innerHTML = '输入你的新密码'
          } else {
            this.$refs.error.innerHTML = res.data.error_msg
          }
        })
      }
    },
    getVerify () {
      if (this.phone.match(/^\d+$/)) {
        this.$http.get('/api/v1/actions/send_sms/?toPhone='+this.phone+'&verifyType=forget_password&t='+Math.random()).then(res => {
          if (res.data.error_no == 0) {
            this.$refs.num.innerHTML = this.num + 's'
            clearInterval(Time)
            var Time = setInterval(() => {
              this.num-=1
              if(this.num <= 0) {
                clearInterval(Time)
                this.$refs.num.innerHTML = '获取验证码'
                this.num = 60
              } else {
                this.$refs.num.innerHTML = this.num + 's'
              }
            },1000)
          } else {
            this.$refs.error.innerHTML = res.data.error_msg
          }
        })
      } else {
        if (this.phone == '') {
          this.$refs.error.innerHTML = '手机号码不能为空'
        } else {
          this.$refs.error.innerHTML = '手机号码输入有误'
        }
      }
    },
    Ok () {
      if (this.newPwd1 == '') {
        this.$refs.error.innerHTML = '请设置您的新密码'
        return
      } else if (this.newPwd1.length.toString() < 6 || !isNaN(this.newPwd1)) {
        this.$refs.error.innerHTML = '密码至少6位且不能全是数字'
        return
      }
      if (this.newPwd2 == '') {
        this.$refs.error.innerHTML = '请再次确认密码'
        return
      }
      if (this.newPwd1 != this.newPwd2) {
        this.$refs.error.innerHTML = '两次密码输入不一致'
        return
      }
      this.$http.post('/api/v1/reset_password/', {
        mobile: this.phone,
        password: this.newPwd1,
        confirm_password: this.newPwd2
      }).then(res => {
        if(res.data.error_no == 0) {
          toastr.info('设置成功')
          this.$route.router.go({name: 'login'})
        } else {
          this.$refs.error.innerHTML = res.data.error_msg
        }
      })
    }
  },
  watch: {
    $route() {
      const loginEle = this.$refs.login;
      loginEle.className = 'box';
    },
  },
}
</script>

<style lang="scss" scoped>
  .box {
    width: 100%;
    height: 100%;
    background: #fff;
    bottom: -100%;
    position: relative;
    animation: enter .5s;
    animation-fill-mode: forwards;
  }
  .exit-forget {
    bottom: 0;
    position: relative;
    animation: exit .5s;
    animation-fill-mode: forwards;
  }
  .reg_cont {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    height: auto;
  }
  .reg_cont {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: auto;
  }
  .reg_box {
    padding: .14rem .28rem;
    .close {
      width: .15rem;
      height: .15rem;
      margin-bottom: .63rem;
    }
    .zi {
      font-size: .24rem;
      padding-bottom: .4rem;
      color: #4A4A4A;
      letter-spacing: 0.39px;
    }
    .inp {
      width: 100%;
      height: auto;
      margin: 0 auto;
      .error {
        width: 100%;
        height: auto;
        font-size: .12rem;
        color: #FA6240;
        padding-bottom: .1rem;
        text-indent: .04rem;
        display: inline-block;
        text-align: left;
      }
      input {
        width: 100%;
        height: .42rem;
        text-indent: .2rem;
        font-size: .14rem;
        background: #F5F5F5;
        border: none;
      }
      ::-webkit-input-placeholder {
        font-size: .15rem;
        color: #9B9B9B;
      }
      :-moz-placeholder {
        font-size: .15rem;
        color: #9B9B9B;
      }
      ::-moz-placeholder {
        font-size: .15rem;
        color: #9B9B9B;
      }
      :-ms-input-placeholder {
        font-size: .15rem;
        color: #9B9B9B;
      }
      .verify_box {
        line-height: .42rem;
        display: flex;
        margin-top: .16rem;
        margin-bottom: .3rem;
        input {
          flex: 1;
          margin-right: .1rem;
        }
      }
      .get_verify {
        width: 1.31rem;
        height: .42rem;
        background-image: linear-gradient(-90deg, #72D99C 2%, #72D9C3 100%);
        text-align: center;
        line-height: .42rem;
        font-size: .16rem;
        color: #fff;
        cursor: pointer;
      }
      select {
        width: 100%;
        height: .42rem;
        background: #F8F8F8;
        border-radius: 4px;
        margin-bottom: .16rem;
        text-indent: .1rem;
        color: #4A4A4A;
        border: none;
        font-size: .14rem;
      }
      .next_one {
        width: 100%;
        height: .44rem;
        background-image: linear-gradient(-90deg, #72D99C 2%, #72D9C3 100%);
        border-radius: 34px;
        font-size: .16rem;
        color: #fff;
        letter-spacing: 0.26px;
      }
      .go_login {
        font-size: .13rem;
        color: #9B9B9B;
        letter-spacing: 0.26px;
        padding-top: .4rem;
        cursor: pointer;
        color: #4a4a4a;
        span {
          color: #4A90E2;
        }
      }
      .pwd1 {
        margin-bottom: .16rem;
      }
      .next_two {
        margin-top: .52rem;
        margin-bottom: .5rem;
      }
    }
  }
  @keyframes enter {
    0% {left: 0; height:0; bottom: -100%;}
    100% {left: 0; height:100%; bottom: 0;}
  }
  @keyframes exit {
    0% {left: 0; height:0; bottom: 0;}
    100% {left: 0; height:100%; bottom: -100%;}
  }
</style>
