<template>
  <div class="empty">
    <img src="../assets/svg/empty.svg" alt="">
    <p>{{emptyCont}}</p>
  </div>
</template>

<script>
export default {
  props: ['emptyCont']
}
</script>

<style lang="scss" scoped>
  .empty {
    width: 100%;
    height: auto;
    text-align: center;
    overflow: hidden;
    padding-top: 1rem;
    img {
      width: 2rem;
      height: 1.3rem;
      margin-bottom: .2rem;
    }
    p {
      font-size: .14rem;
      color: #9D9D9D;
    }
  }

</style>
