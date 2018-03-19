<template>
  <div class="login" ref="login">
    <img src="../../assets/img/pageimgs/Close Icon2.png" alt="" class="close" @click="close">
    <div class="bac"></div>
    <div class="loginBox">
      <p class="lufei">路飞学城</p>
      <div class="loginFrom">
        <span class="error" ref="error"></span>
        <p class="fromItem"><input type="text" placeholder="用户名/手机号" v-model="user"></p>
        <p class="fromItem"><input type="password" placeholder="填写密码" v-model="pwd"></p>
        <div id="embed-captcha"></div>
        <p id="wait" class="show">验证码加载中...</p>
        <p id="notice" class="hide">请先拖动验证码到相应位置</p>
        <div class="fromRemember">
          <p><span @click="remember"><i v-show="yes"></i></span>7天内免登录</p>
          <p @click="goForget">忘记密码</p>
        </div>
        <p class="fromBtn"><button @click="login">登录</button></p>
      </div>
      <div class="noAccount">
        <p class="seg"></p>
        <p class="foot">
          <span>没有账号</span>，
          <span @click="goReg">立即注册</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Cookies from '../../assets/js/Cookie'
import { setTimeout } from 'timers';
import '../../assets/js/gt'

export default {
  data () {
    return {
      yes: false, //记住密码
      user: '', //用户名
      pwd: '', //密码
      error: '',//报错信息
      // count: 0,
    }
  },
  mounted () {
    $(function(){
      $(document).find("input").on("focus",function(){
        // $(this).css('border','1px solid #4CD964')
        $('.error').html('')
      })
      // .on('blur',function(){
      //   $(this).css('border','none')
      // })
    });
    var myurl = this.GetQueryString("return_url")
    if(myurl != null && myurl.toString().length > 1){
      console.log(this.GetQueryString("return_url"))
    }
    this.$http.get('/api/v1/captcha_check/?t='+ Math.random()).then(res => {
      initGeetest({
        width: "100%",
        gt: res.data.data.gt,
        challenge: res.data.data.challenge,
        product: "embed",
        offline: !res.data.data.success
      }, this.handlerEmbed)
    })
  },
  watch: {
    $route() {
      const loginEle = this.$refs.login;
      loginEle.className = 'login';
    },
  },
  methods: {
    goForget () {
      this.$router.push({path: '/forget'})
    },
    goReg () {
      this.$router.push({path: '/register'})
    },
    GetQueryString(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
    },
    remember () {
      this.yes = !this.yes
    },
    get (key, exp) {
    var data = localStorage.getItem(key);
    if (new Date().getTime() > exp) {
        localStorage.removeItem('info')
      }
    },
    login () {
      if(this.user == '' || this.pwd == '') {
        this.$refs.error.innerHTML = '用户名与密码不能为空'
      } else {
        var params={
          username: this.user,
          password: this.pwd,
          seven: this.yes,
          geetest_challenge: $('input[name="geetest_challenge"]').val(),
          geetest_validate: $('input[name="geetest_validate"]').val(),
          geetest_seccode: $('input[name="geetest_seccode"]').val(),
          redirect_url: this.GetQueryString("return_url"),
        }
        this.$http.post('/api/v1/account/login/', {
          ...params
        }).then(res => {
          if (res.data.error_no==0){
            var data = res.data.data
            const info = {
              token: data.access_token,
              username: data.username,
              userImg: data.avatar,
              phone: data.phone
            }
            localStorage.setItem('token', data.access_token, data.expires_in)
            localStorage.setItem('username', data.username, data.expires_in )
            localStorage.setItem('userimg', data.avatar, data.expires_in )
            if(this.yes){
              localStorage.setItem('user',JSON.stringify(info))
            }
            if (res.data.data.redirect_url == '' || res.data.data.redirect_url == undefined) {
              this.$router.push({path: '/home'})
            } else {
              window.location.href = res.data.data.redirect_url
            }
          } else {
            if (this.pwd.length < 6) {
              this.$refs.error.innerHTML = '密码至少6位'
            } else {
              this.$refs.error.innerHTML = res.data.error_msg
            }
          }
        })
      }
    },
    handlerEmbed (captchaObj) {
      $('#embed-captcha').empty()
      captchaObj.appendTo("#embed-captcha")
      captchaObj.onReady(function () {
        $("#wait")[0].className = "hide"
      })
      $("#embed-submit").click(function (e) {
        var validate = captchaObj.getValidate()
        if (!validate) {
          $("#notice")[0].className = "show"
          setTimeout(function () {
            $("#notice")[0].className = "hide"
          }, 2000)
          e.preventDefault()
        }
      })
    },
    close () {
      const loginEle = this.$refs.login;
      loginEle.className = 'exit-login';
      setTimeout(() => {
        this.$router.go(-1);
      }, 200);
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    width: 100%;
    height: 100%;
  }
  span {
    cursor: pointer;
  }
  .error {
    color: #FA6240;
    margin-bottom: .05rem;
    display: inline-block;
  }
  .login {
    bottom: -100%;
    position: relative;
    animation: enter .5s;
    animation-fill-mode: forwards;
  }
  .exit-login {
    bottom: 0;
    position: relative;
    animation: exit .5s;
    animation-fill-mode: forwards;
  }
  .close {
    width: .15rem;
    height: .15rem;
    position: absolute;
    left: .28rem;
    top: .14rem;
  }
  .bac {
    width: 100%;
    height: 2.59rem;
    background-image: linear-gradient(-45deg, #72D98F 0%, #72D9CE 100%);
  }
  .loginBox {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: .83rem;
    .lufei {
      text-align: center;
      font-size: .36rem;
      color: #FFFFFF;
      padding-bottom: .28rem;
    }
    .loginFrom {
      background: #fff;
      margin: 0 .28rem;
      padding: .4rem .22rem .3rem;
      .fromItem {
        height: .4rem;
        border-radius: .04rem;
        margin-bottom: .25rem;
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
        input {
          width: 100%;
          height: 100%;
          background: #F5F5F5;
          border: none;
          text-indent: .2rem;
          font-size: .15rem;
        }
      }
      .hide {
        display: none;
      }
      .show,.hide {
        font-size: .12rem;
        text-indent: .05rem;
        color: #9B9B9B;
      }
      .fromRemember {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .29rem;
        margin-top: .28rem;
        p:nth-of-type(1) {
          font-size: .13rem;
          color: #666666;
          display: flex;
          align-items: center;
          span {
            display: inline-block;
            width: .22rem;
            height: .22rem;
            border: 1px solid #F3F3F3;
            border-radius: 4px;
            margin-right: .09rem;
            text-align: center;
            line-height: .22rem;
            i {
              display: inline-block;
              width: .12rem;
              height: .07rem;
              border: 2px solid #4CD964;
              border-top-color: #fff;
              border-right-color: #fff;
              margin-bottom: .03rem;
              transform: rotate(-45deg);
            }
          }
        }
        p:nth-of-type(2) {
          font-size: .15rem;
          color: #262628;
        }
      }
      .fromBtn {
        height: .46rem;
        background-image: linear-gradient(-225deg, #72D9C4 0%, #72D997 100%);
        border-radius: 35px;
        line-height: .46rem;
        button {
          width: 100%;
          font-size: .15rem;
          color: #FFFFFF;
          text-align: center;
          outline: none;
        }
      }
    }
    .noAccount {
      margin: 0 .28rem;
      margin-top: .38rem;
      .seg {
        width: 100%;
        height: .01rem;
        background-image: linear-gradient(-225deg, #72D99A 0%, #72D9BB 100%);
        margin-bottom: .2rem;
      }
      .foot {
        text-align: center;
        font-size: .15rem;
        color: #5E5E5E;
        span:nth-of-type(2) {
          color: #4b91e1;
        }
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
