<template>
  <transition name="fade">
    <div class="reg">
      <div class="cont">
        <img src="../../assets/img/pageimgs/Close.png" alt="" class="close" @click="close">
        <div class="cont1" v-show="step1">
          <p class="title">Hello！欢迎来到路飞学城</p>
          <p class="p1">请填写你的手机号码</p>
          <p class="error" ref="error"></p>
          <div class="phoneBox">
            <select v-model="nationCode">
              <option value="" selected>+86&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国 </option>
              <option v-for="(item,index) in nationCodes" :key="index" :value="item.nation_code">+{{item.nation_code}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.nation_name}}</option>
            </select>
            <input type="text" class="phone" v-model="phone" placeholder="请输入手机号码">
          </div>
          <div class="code">
            <div class="num">
              <span>验证码</span>
              <input type="text" class="num" placeholder="输入验证码" v-model="verify">
            </div>
            <button @click="getVerify" ref="num">发送验证码</button>
          </div>
          <button class="btn" @click="nextOne">下一步</button>
          <p class="gologin" @click="goLogin">已有账号，<span>直接登录</span></p>
        </div>
        <div class="cont2" v-show="step2">
          <p class="title">注册路飞学城</p>
          <input type="text" placeholder="用户名一旦确认不可更改" v-model="name">
          <input type="password" placeholder="密码至少6位且不能全数字" v-model="pwd1">
          <input type="password" placeholder="确认密码" v-model="pwd2">
          <div class="city">
            <select v-model="province" @change="getCity()">
              <option value="" selected>请选择省份</option>
              <option v-for="(index,item) in provinces" :value="item.id" :key="index" selected>{{item.name}}</option>
            </select>
            <select v-model="city">
              <option value="" selected>请选择城市</option>
              <option v-for="(index,item) in citys" :value="item.id" :key="index" selected>{{item.name}}</option>
            </select>
          </div>
          <button class="btn" @click="nextTwo">下一步</button>
        </div>
        <div class="cont3" v-show="step3">
          <p class="title t3">注册路飞学城</p>
            <datetime
              v-model="birthday"
              title="选择出生年月日"
              class="time">
            </datetime>
          <!-- <input id="birthdays" v-model="birthday" @click="setBirthday()" type="text" placeholder="请选择出生年月" class="sel1 je-bg-g9" readonly/> -->
          <div class="city">
            <select v-model="industry" @change="getProfession()">
              <option value="" selected>请选择行业</option>
              <option v-for="(index,item) in industrys" :value="item.id" :key="index">{{item.name}}</option>
            </select>
            <select v-model="profession">
              <option value="" selected>请选择职业</option>
              <option v-for="(index,item) in professions" :value="item.id" :key="index">{{item.name}}</option>
            </select>
          </div>
          <div class="interested">
            <p>感兴趣的技术</p>
            <div class="int_span">
              <span v-for="(index,item) in interest" :key="index" :id="item.id" @click="selectInterest($event)">{{item.name}}</span>
            </div>
          </div>
          <button class="accomplish" @click="Ok">完成</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import $ from 'jquery'
import { Datetime, Group, XButton } from 'vux'

export default {
  components: {
    Datetime,
    Group,
    XButton
  },
  data () {
    return {
      step1: true,
      step2: false,
      step3: false,
      nationCode: "",
      nationCodes: [],
      phone: '',//手机号码
      verify: '',//验证码
      error: '',//报错信息
      num: 60,//验证码倒计时
      name: '',//注册新用户名
      pwd1: '',//新密码1
      pwd2: '',//新密码2
      provinces: '',//省份
      province: '',
      provinceId: '',//省份ID
      citys: '',//城市
      city: '',
      cityId: '',//城市ID
      birthday: '',
      industry: '',//行业
      industrys: '',
      profession:'',//职业
      professions: '',
      interest: '',//兴趣
      numIn: 0,//感兴趣技术
      arr: [],
      value: true
    }
  },
  mounted () {
    console.log(this.nationCode)
    $(function(){
      $(document).find("input").on("focus",function(){
        // $(this).css('border','1px solid #4CD964')
        $('.error').html('')
      }).on('blur',function(){
        $(this).css('border','none')
      })
      $(document).find("select").on("focus",function(){
        // $(this).css('border','1px solid #4CD964')
        $('.error').html('')
      }).on('blur',function(){
        $(this).css('border','none')
      })
    })
    this.getNation()
  },
  methods: {
    nextOne () {
      if (this.phone == '' || this.verify == '') {
        this.$refs.error.innerHTML = '请输入手机号并获取验证码'
      } else if (this.verify.length < 6) {
        this.$refs.error.innerHTML = '验证码输入有误'
      } else {
        this.$http.post('/api/v1/actions/send_sms/',{
          validationPhone: this.phone,
          authCode: this.verify,
          verifyType: 'register'
        }).then(res => {
          if(res.data.error_no == 0) {
            this.step1 = false
            this.step2 = true
            this.getProvince()
            Cookies.set('register_token',res.data.data.register_token)
          } else if(res.data.error_no == -1){
            this.$refs.error.innerHTML = res.data.error_msg
          }
        })
      }
    },
    nextTwo () {
      if (this.name =='') {
        this.$refs.error.innerHTML = '请设置您的用户名'
        return
      }
      if (this.name != '') {
        this.$http.get('/api/v1/username_check/?username='+this.name).then(res => {
          if (res.data.error_no == -1) {
            this.$refs.error.innerHTML = res.data.error_msg
            return
          }
          if (this.pwd1 == '') {
            this.$refs.error.innerHTML = '请设置您的密码'
            return
          } else if (this.pwd1.length.toString() < 6 || !isNaN(this.pwd1)) {
            this.$refs.error.innerHTML = '密码至少6位且不能全是数字'
            return
          }
          if (this.pwd2 == '') {
            this.$refs.error.innerHTML = '请再次确认密码'
            return
          }
          if (this.pwd1 != this.pwd2) {
            this.$refs.error.innerHTML = '两次密码输入不一致'
            return
          }
          if (this.province == '' || this.province == '请选择省份' || this.city == '' || this.city == '请选择城市') {
            this.$refs.error.innerHTML = '请选择您的省份及所在城市'
            return
          } else {
            this.step2 = false
            this.step3 = true
            this.getIndustry()
            this.getInterest()
          }
        })
      }
    },
    Ok () {
      if (this.birthday == '') {
        this.$refs.error.innerHTML = '请选择出生日期'
        return
      }
      if (this.industry == '' || this.industry == '请选择行业' || this.profession == '' || this.profession == '请选择职业') {
        this.$refs.error.innerHTML = '请选择您的行业及职业'
        return
      }
      if (this.numIn == 0) {
        this.$refs.error.innerHTML = '请选择一个您感兴趣的技术'
        return
      }
      var params={
        allow_token: Cookies.get('register_token'),
        username: this.name,
        password: this.pwd1,
        confirm_password: this.pwd2,
        nation_code: this.nationCode,
        mobile: this.phone,
        tags: this.dedupe(this.arr),
        city: this.city,
        birthday: $('#birthdays').val(),
        profession: this.profession
      }
      this.$http.post('/api/v1/register/',JSON.stringify(params)).then(function(res){
        if (res.data.error_no == 0){
          toastr.success('Hey~亲,恭喜您~注册成功啦')
          this.$route.router.go({name: 'login'})
          this.$store.state.phone = this.phone
        } else if (res.data.error_no == -1){
          toastr.info(res.data.error_msg);
        } else if (res.data.error_no == 1){
          var error_msg = res.data.error_msg
          for (var i in error_msg){
            if(error_msg[i][0]){
              toastr.info(error_msg[i][0]);
              break
            }
          }
        }
      })
    },
    getVerify () {
      if (this.phone != "") {
        this.$http.get('/api/v1/mobile_check/?mobile='+this.phone).then(res => {
          var data = res.data
          if (data.error_no == 0) {
            this.$http.get('/api/v1/actions/send_sms/?toPhone='+this.phone+'&verifyType=register&nationCode='+ this.nationCode +'&t='+Math.random()).then(res => {
              if (res.data.error_no == 0) {
                this.$refs.num.innerHTML = this.num + 's'
                clearInterval(Time)
                var Time = setInterval(() => {
                  this.num -= 1
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
            this.$refs.error.innerHTML = data.error_msg
          }
        })
      } else {
        this.$refs.error.innerHTML = '手机号码不能为空'
      }
    },
    defaultPosition () {
      this.$http.get('/api/v1/ip_info/').then((res) => {
        if(res.data.error_no==0){
          this.province = this.position.province_id
          this.cityId = this.position.city_id
          this.getProvince()
        }else {
          this.getProvince()
        }
      })
    },
    getProvince () {
      this.$http.get('/api/v1/province/').then(res => {
        if(res.data.error_no == 0){
          this.provinces = res.data.data
        }
      })
    },
    getCity () {
      if (!this.province){
        return
      }
      this.$http.get('/api/v1/city/?province_id='+this.province).then(res => {
        if(res.data.error_no==0){
          this.citys = res.data.data
        }
      })
    },
    getIndustry () {
      this.$http.get('/api/v1/industry/').then((res) => {
        if(res.data.error_no==0){
          this.industrys = res.data.data
        }
      })
    },
    getProfession () {
      this.$http.get('/api/v1/profession/?industry_id='+this.industry).then((res) => {
        if(res.data.error_no == 0){
          this.professions = res.data.data
        }
      })
    },
    getInterest () {
      this.$http.get('/api/v1/interested_tag/').then((res) => {
        if(res.data.error_no==0){
          this.interest = res.data.data
        }
      })
    },
    dedupe(array){
      return Array.from(new Set(array))
    },
    selectInterest (e) {
      this.numIn = 1
      this.arr.push(e.target.id)
      this.$refs.error.innerHTML = ''
      $(e.target).css('color','#4a90e2')
    },
    getNation () {
      this.$http.get('/api/v1/nation/').then((res) => {
        if(res.data.error_no==0){
          this.nationCodes = res.data.data
        }
      })
    },
    goLogin () {
      this.$router.push({path: '/login'})
    },
    close () {
      this.$router.push({path: '/my'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave {
    opacity: 0;
  }
  .fade-leave-active {
    transition: all .3s ease;
  }
  .reg {
    width: 100%;
    height: 100%;
    background: #fff;
    .cont {
      padding: .14rem .28rem;
      ::-webkit-input-placeholder {
        color: #9B9B9B;
      }
      :-moz-placeholder {
        color: #9B9B9B;
      }
      ::-moz-placeholder {
        color: #9B9B9B;
      }
      :-ms-input-placeholder {
        color: #9B9B9B;
      }
      .close {
        width: .15rem;
        height: .15rem;
        margin-bottom: .63rem;
      }
      .title {
        font-size: .24rem;
        color: #000000;
        letter-spacing: 0.19px;
        line-height: .45rem;
      }
      .btn {
        width: 100%;
        height: .46rem;
        font-size: .15rem;
        color: #FFFFFF;
        background-image: linear-gradient(-90deg, #72D99C 2%, #72D9C3 100%);
        border-radius: 34px;
        border: none;
        margin-bottom: .31rem;
      }
      .cont1 {
        .p1 {
          font-size: .15rem;
          color: #262628;
          padding-top: .1rem;
          padding-bottom: .52rem;
        }
        .error {
          color: #FA6240;
          margin-bottom: .1rem;
        }
        .phoneBox {
          width: 100%;
          height: .44rem;
          background: #F5F5F5;
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: .14rem;
          select {
            height: 100%;
            padding-left: .1rem;
            font-size: .15rem;
            color: #262628;
          }
          .phone {
            width: 80%;
            height: .44rem;
            background: #F5F5F5;
            border: none;
            position: absolute;
            right: 0;
            text-indent: .14rem;
            font-size: .15rem;
          }
        }
        .code {
          width: 100%;
          height: .44rem;
          display: flex;
          margin-bottom: .42rem;
          .num {
            flex: 1;
            position: relative;
            input {
              width: 100%;
              height: 100%;
              background: #F5F5F5;
              border: none;
              text-indent: .8rem;
              font-size: .15rem;
            }
            span {
              position: absolute;
              left: .15rem;
              top: .12rem;
              z-index: 100;
              font-size: .15rem;
              color: #262628;
            }
          }
          button {
            width: 1rem;
            height: 100%;
            background-image: linear-gradient(-90deg, #72D9A1 0%, #72D9C3 100%);
            border: none;
            font-size: .15rem;
            color: #FFFFFF;
            float: right;
            margin-left: .12rem;
          }
        }
        .gologin {
          font-size: .13rem;
          color: #4A4A4A;
          span {
            color: #4b91e1;
          }
        }
      }
      .city {
        width: 100%;
        height: .44rem;
        display: flex;
        margin-top: .14rem;
        margin-bottom: .35rem;
        text-align: center;
        select {
          flex: 1;
          background: #F5F5F5;
          border: none;
          font-size: .15rem;
          color: #9B9B9B;
          text-indent: .1rem;
        }
        select:nth-of-type(1) {
          margin-right: .1rem;
        }
      }
      .cont2 {
        .title {
          margin-bottom: .18rem;
        }
        input {
          width: 100%;
          height: .44rem;
          background: #F5F5F5;
          border: none;
          font-size: .15rem;
          text-indent: .22rem;
          margin-top: .1rem;
        }
        input:nth-of-type(3) {
          margin-bottom: .33rem;
        }
      }
      .cont3 {
        .weui-cell:before {
          border: none !important;
        }
        .t3 {
          margin-bottom: .28rem;
        }
        .time {
          font-size: .15rem;
          color: #9D9D9D;
          background: #F5F5F5;
          border: 1px solid #F5F5F5;
        }
        .interested {
          margin-top: .2rem;
          font-size: .15rem;
          color: #626871;
          letter-spacing: 0.24px;
          p {
            margin-bottom: .2rem;
          }
          span {
            color: #9B9B9B;
            font-size: .12rem;
            display: inline-block;
            padding-right: .24rem;
            font-style: normal;
          }
          span:nth-of-type(4) {
            padding-top: .18rem;
          }
        }
        .accomplish {
          width: 100%;
          height: .46rem;
          background-image: linear-gradient(-90deg, #72D99C 2%, #72D9C3 100%);
          border-radius: 34px;
          border: none;
          font-size: .15rem;
          color: #FFFFFF;
          margin-top: .4rem;
        }
      }
    }
  }
</style>
