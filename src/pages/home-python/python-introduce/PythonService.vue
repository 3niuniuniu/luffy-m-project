<template>
  <div class="service">
    <p class="title"><span>我们的服务</span></p>
    <div class="box" :class="{'footcolor': bac}">
      <p class="p1" :class="{'bac': bac}">独家特色</p>
      <p v-html="serviceCont" class="p2"></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bac: false,
      serviceCont: '根据一线互联网企业实际需求制作的独家顶尖课程<br>2年内视频有效期<br>6个月导师全程陪同辅导<br>技术专家逐行审阅代码后为你提供的个性化反馈<br>班主任+导师+小组长 多维度帮扶、劝学机制<br>高额奖学金激励制度<br>工作推荐、就业咨询等职业发展支持<br>',
    }
  },
  mounted () {
    if (this.$route.name == 'python-advanced') {
      this.bac = true
    } else {
      this.bac = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .service {
    width: 90%;
    margin: 0 auto;
    margin-bottom: .3rem;
    .title {
      font-size: .16rem;
      color: #4A4A4A;
      border-bottom: 1px solid #E9E9E9;
      padding-bottom: .05rem;
      margin-bottom: .2rem;
      span {
        padding-bottom: .05rem;
        border-bottom: 1px solid #333;
      }
    }
    .box {
      width: 100%;
      height: auto;
      background: #fff;
      box-shadow: 0 4px 0 0 #72D9C2;
      position: relative;
      .p1 {
        width: 1.66rem;
        height: .46rem;
        font-size: .18rem;
        background: #72D9C2;
        color: #FFFFFF;
        text-align: center;
        line-height: .46rem;
        position: absolute;
        left: 0;
        top: .26rem;
      }
      .bac {
        background: #E45A82;
      }
      .p2 {
        font-size: .13rem;
        color: #4A4A4A;
        letter-spacing: 0.93px;
        line-height: .28rem;
        padding: 0 .14rem;
        padding-top: .98rem;
        padding-bottom: .62rem;
      }
    }
    .footcolor {
      box-shadow: 0 4px 0 0 #E45A82;
    }
  }
</style>
