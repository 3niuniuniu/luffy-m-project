<template>
  <div class="error">
    <div class="box">
      <img src="../assets/svg/error-500.svg" alt="">
      <p>{{errorhint}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['errorhint'],
  data () {
    return {
      errorhint: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .error {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    .box {
      width: 50%;
      height: 50%;
      text-align: center;
      position: absolute;
      left: 50%;
      top:50%;
      margin-left: -25%;
      img {
        margin-bottom: .2rem;
      }
      p {
        font-size: .14rem;
        color: #9D9D9D
      }
    }
  }

</style>
