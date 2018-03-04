<template>
  <div class="videopage">
    <div class="title">
      <img src="../../assets/img/pageimgs/back_arrow.png" alt="" @click="goBack">
      <span>1-1爬虫课程简介及框架简介</span>
    </div>
    <div class="video"></div>
    <p class="log">课程目录</p>
    <catalog></catalog>
  </div>
</template>

<script>
import Catalog from './Catalog'

export default {
  components: {
    Catalog,
  },
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    width: 100%;
    height: .44rem;
    line-height: .44rem;
    font-size: .17rem;
    color: #fff;
    background-image: linear-gradient(-90deg, #72D98F 0%, #72D9CE 100%);
    position: fixed;
    left: 0;top:0;
    z-index: 999;
    span {
      padding-left: .36rem;
    }
    img {
      width: .15rem;
      height: .16rem;
      position: absolute;
      left: .1rem;
      bottom: .15rem;
    }
  }
  .videopage {
    width: 100%;
    height: auto;
  }
  .video {
    width: 100%;
    height: 2.1rem;
    background: red;
  }
  .log {
    font-size: .14rem;
    color: #4A4A4A;
    padding: .14rem .17rem;
    background: #fff;
  }
</style>
