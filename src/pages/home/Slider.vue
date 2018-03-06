<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../../assets/img/pageimgs/banner1.png" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/img/pageimgs/banner2.png" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/img/pageimgs/banner3.png" alt=""></div>
    </div>
  </div>

</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  data () {
    return {

    }
  },
  mounted () {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 6,
      paginationClickable: true,
      autoplay: 1000,
      pagination : '.swiper-pagination',
    })
    // $(".swiper-container").mouseenter(() => {
    //     swiper.stopAutoplay();
    // }).mouseleave(() => {
    //     swiper.startAutoplay();
    // })
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 3.38rem;
    height: 1.5rem;
    border-radius: 4px;
  }
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    padding-top: .5rem;
  }
  .swiper-slide {
    width: 90%;
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
