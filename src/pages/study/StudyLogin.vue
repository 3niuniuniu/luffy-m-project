<template>
  <div class="login">
    <div class="top">
      <div class="gologin" @click="goLogin">
        <p>登陆</p>
      </div>
      <div class="course">
        <p>专题课程</p>
        <p>学位课程</p>
      </div>
    </div>
    <img src="../../assets/img/pageimgs/多设备.png" alt="" class="img1">
    <p class="p1">登录<span>后可以多设备同步学习</span></p>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin () {
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
    text-align: center;
    .top {
      width: 100%;
      height: 2.5rem;
      background: #FFFFFF;
      position: relative;
    }
    .gologin {
      width: .8rem;
      height: .8rem;
      border-radius: 100%;
      border: 1px solid #72D9C2;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left:50%;
      top:50%;
      margin-left: -.4rem;
      margin-top: -.6rem;
      p {
        width: .74rem;
        height: .74rem;
        background: #72D9C2;
        border-radius: 100%;
        text-align: center;
        line-height: .74rem;
        font-size: .20rem;
        color: #FFFFFF;
        cursor: pointer;
      }
    }
    .course {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      left: 0;
      bottom: .25rem;
      p {
        flex: 1;
        height: .4rem;
        line-height: .4rem;
        border: 1px solid #D0D0D0;
        border-radius: 4px;
        text-align: center;
        margin: 0 .1rem;
        font-size: .14rem;
        color: #666666;
      }
      p:nth-of-type(1) {
        margin-right: 0px;
      }
    }
    .img1 {
      width: 1.2rem;
      height: 1.2rem;
      margin-top: .5rem;
      margin-bottom: .2rem;
    }
    .p1 {
      font-size: .14rem;
      color: #333333;
      span {
        color: #99a4bd;
      }
    }
  }
</style>
