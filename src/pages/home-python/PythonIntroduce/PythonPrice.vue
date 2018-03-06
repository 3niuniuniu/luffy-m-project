<template>
  <div class="price">
    <p class="p1"><span>{{pirceNum.name}}</span><span>{{pirceNum.pirce}}</span></p>
    <p class="p2">{{pirceNum.cont}}</p>
    <p class="p3">
      <span>难度：{{pirceNum.difficulty}}</span>
      <span>学习周期：{{pirceNum.period}}</span>
      <span>预期工资：{{pirceNum.pay}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['pirceNum'],
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
  .price {
    width: 100%;
    height: auto;
    padding: .2rem;
    padding-top: .25rem;
    margin-bottom: .3rem;
    background: #FFFFFF;
    .p1 {
      font-size: .18rem;
      color: #4A4A4A;
      display: flex;
      justify-content: space-between;
      margin-right: .4rem;
      span:nth-of-type(2) {
        font-size: .16rem;
        color: #FA6240;
      }
    }
    .p2 {
      font-size: .12rem;
      color: #9B9B9B;
      padding: .12rem 0;
      border-bottom: 1px solid #DBDFE2;
      margin-right: .4rem;
    }
    .p3 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .12rem;
      color: #87909B;
      padding-top: .12rem;
      margin-right: .4rem;
      span {
        border-right: 1px solid #D0D0D0;
        padding-right: .33rem;
      }
      span:last-child {
        border: none;
        padding-right: 0;
      }
    }
  }
</style>
