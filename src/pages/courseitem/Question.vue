<template>
  <div class="issue">
    <div class="list" v-for="(item,index) in QuestionList" :key="index">
      <p>{{item.question}}</p>
      <p>{{item.answer}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['QuestionList'],
}
</script>

<style lang="scss" scoped>
  .issue {
    .list {
      background: #fff;
    }
    .list:last-child {
      margin-bottom: .8rem;
    }
    div:last-child {
      border:none;
    }
    div {
      padding-left: .2rem;
      padding-right: .2rem;
      border-bottom: 1px solid #DBDFE2;
    }
    p:nth-of-type(1) {
      padding-top: .21rem;
      padding-bottom: .1rem;
      font-size: .14rem;
      color: #4A4A4A;
    }
    p:nth-of-type(2) {
      font-size: .12rem;
      color: #9B9B9B;
      line-height: .26rem;
      padding-bottom: .18rem;
    }
  }
</style>
