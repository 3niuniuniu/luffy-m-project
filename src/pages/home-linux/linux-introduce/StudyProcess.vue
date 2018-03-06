<template>
  <div class="box">
    <p class="p1">Linux云计算工程师的学习之路</p>
    <div class="process">
      <div class="cont">
        <p class="p1"></p>
        <div>
          <span></span>
          <p>第一学期</p>
          <p>Linux云计算工程师(中级)</p>
          <p>薪资：6-8K</p>
        </div>
        <div>
          <span></span>
          <p>第二学期</p>
          <p>Linux云计算工程师(高级)</p>
          <p>薪资：10-15K</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .box {
    width: 90%;
    height: auto;
    margin: 0 auto;
    .p1 {
      font-size: .18rem;
      color: #4A4A4A;
      padding-bottom: .16rem;
    }
    .process {
      width: 100%;
      height: auto;
      background: #fff;
      margin-bottom: .3rem;
      .cont {
        width: 100%;
        height: auto;
        padding: .2rem;
        position: relative;
        .p1 {
          width: .01rem;
          height: .6rem;
          background: #01B4E4;
          position: absolute;
          margin-left: .04rem;
          margin-top: .05rem;
        }
        div:nth-of-type(1) {
          padding-bottom: .16rem;
        }
        div {
          position: relative;
          span {
            width: .08rem;
            height: .08rem;
            background: #01B4E4;
            border-radius: 50%;
            display: inline-block;
            position: absolute;
            left: 0;
            top: .04rem;
          }
          p {
            margin-left: .2rem;
          }
          p:nth-of-type(1) {
            font-size: .13rem;
            color: #01B4E4;
          }
          p:nth-of-type(2) {
            font-size: .14rem;
            color: #4A4A4A;
          }
          p:nth-of-type(3) {
            font-size: .12rem;
            color: #4A4A4A;
          }
        }
      }
    }
  }

</style>
