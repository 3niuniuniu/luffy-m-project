<template>
  <ul class="StudyData">
    <li>
      <p>457</p>
      <p>今日学习</p>
    </li>
    <li>
      <p>457</p>
      <p>累计学习</p>
    </li>
    <li>
      <p>457</p>
      <p>奖学金余额</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'StudyData',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .StudyData {
    width: 100%;
    height: .8rem;
    background: #fff;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.10);
    margin-top: .44rem;
    li {
      height: 100%;
      flex: 1;
      text-align: center;
      box-shadow: 1px 0 0 0 rgba(0,0,0,0.10);
      align-items: center;
      p:nth-of-type(1) {
        font-size: .24rem;
        color: #000;
        margin-top: .14rem;
        margin-bottom: .04rem;
      }
      p:nth-of-type(2) {
        font-size: .12rem;
        color: #B2B2B2;
      }
    }
  }
</style>
