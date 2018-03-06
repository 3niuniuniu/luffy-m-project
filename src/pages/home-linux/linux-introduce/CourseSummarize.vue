<template>
  <div class="summarize">
    <div class="box">
      <p class="p1">课程概述</p>
      <p class="con1">{{Summarize.con1}}</p>
      <p class="con2">{{Summarize.con2}}</p>
      <ul>
        <li>
          <p>入学周期</p>
          <b>{{Summarize.time}}</b>
        </li>
        <li>
          <p>难度</p>
          <b>{{Summarize.difficulty}}</b>
        </li>
        <li>
          <p>预计工资</p>
          <b>{{Summarize.money}}</b>
        </li>
      </ul>
      <div class="conditions">
        <p>入学条件</p>
        <b>{{Summarize.condition}}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['Summarize']

}
</script>

<style lang="scss" scoped>
  .summarize {
    width: 90%;
    height: auto;
    margin:  0 auto;
    background: #FFFFFF;
    box-shadow: 0 2px 8px 0 #D0D0D0;
    input {
      width: 100px;
      height: 100px;
    }
    .box {
      width: 90%;
      height: auto;
      padding: 0 .15rem;
      margin-bottom: .3rem;
      padding-bottom: .34rem;
      .p1 {
        font-size: .18rem;
        color: #4A4A4A;
        padding-top: .18rem;
        padding-bottom: .18rem;
      }
      .con1,.con2 {
        font-size: .12rem;
        color: #4A4A4A;
        line-height: .2rem;
      }
      .con1 {
        padding-bottom: .2rem;
      }
      .con2 {
        padding-bottom: .28rem;
      }
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-bottom: .24rem;
        p {
          font-size: .14rem;
          color: #909CB7;
          padding-bottom: .08rem;
        }
        b {
          font-size: .14rem;
          color: #4A4A4A;
          letter-spacing: 1.13px;
        }
      }
      .conditions {
        font-size: .14rem;
        p {
          color: #909CB7;
          padding-bottom: .08rem;
        }
        b {
          color: #4A4A4A;
        }
      }
    }
  }

</style>
