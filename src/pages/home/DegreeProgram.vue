<template>
  <div class="degree">
    <p class="model">学位课程</p>
    <div class="box">
      <div>
        <p>Python</p>
        <p>0基础6个月练成Python全栈开发大神</p>
        <p><span>¥366.00</span><img src="../../assets/img/pageimgs/pylogo.png" alt=""></p>
      </div>
      <div>
        <p>Linux</p>
        <p>0基础6个月练成Python全栈开发大神</p>
        <p><span>¥366.00</span><img src="../../assets/img/pageimgs/Linuxlogo.png" alt=""></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'degree',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .degree {
    width: 100%;
    height: auto;
    margin-top: .18rem;
    padding: 0 .1rem;
    box-sizing: border-box;
    .model {
      margin-left: .2rem;
      margin-bottom: .17rem;
      font-size: .14rem;
      color: #2B333B;
    }
    .box {
      width: 100%;
      display: flex;
      div {
        flex:1;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.10);
        border-radius: 5px;
        padding-left: .12rem;
        padding-top: .13rem;
        padding-bottom: .16rem;
        p:nth-of-type(1) {
          font-size: .15rem;
          color: #FDFDFD;
          padding-bottom: .03rem;
        }
        p:nth-of-type(2) {
          font-size: .12rem;
          color: #E3F0FA;
        }
        p:nth-of-type(3) {
          font-size: .12rem;
          color: #FFFFFF;
          img {
            float: right;
            padding-right: .1rem;
          }
          span {
            display: inline-block;
            padding-top: .06rem;
          }
        }
      }
      div:nth-of-type(1) {
        background: #6EB3EB;
        margin-right: .1rem;
        img {
          width: .2rem;
          height: .2rem;
        }
      }
      div:nth-of-type(2) {
        background: #F57548;
        img {
          width: .22rem;
          height: .24rem;
        }
      }
    }
  }

</style>
