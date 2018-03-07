<template>
  <div class="box">
    <p class="title"><span>讲师团队</span></p>
    <div class="teacher" v-drag>
      <div class="module" v-for="(item,index) in TeacherList" :key="index">
        <img :src="item.image" alt="">
        <p class="p1">{{item.name}}</p>
        <p class="p2">{{item.title}}</p>
        <p class="p3">{{item.brief}}</p>
      </div>
    </div>
    <div class="drag"><div class="plan" v-drag></div></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { px2rem } from '../../../assets/js/utils';
import { clearTimeout } from 'timers';

export default {
  props: ['TeacherList'],
  data () {
    return {

    }
  },
  mounted () {

  },
  directives: {
    drag: {
      // 指令的定义
      inserted: function (el) {
        var oDiv = el;
        oDiv.addEventListener('touchstart', function(ev){
          var disX = ev.touches[0].clientX-oDiv.offsetLeft;
          var margin = Number($('.module').css("margin-right").replace(/px/g, ''))*6;
          var parentW = $('.module').width() * 6 + margin;
          var dragW = $('.drag').width();
          if (oDiv.className === 'teacher'){
            oDiv.addEventListener('touchmove', function(ev) {
                var l = ev.touches[0].clientX-disX;
                var marginRight = $('.module').css("margin-right").replace(/px/g, '');
                var r = document.documentElement.clientWidth - marginRight - parentW;
                if (l > 0) l = 0;
                if (l < r) l = r;
                oDiv.style.left=px2rem(l)+'rem';
                $('.plan').css('left', px2rem(-l/6.3)+'rem');
            }, { passive: true });
          } else if (oDiv.className === 'plan') {
            oDiv.addEventListener('touchmove', function(ev) {
                var l = ev.touches[0].clientX-disX;
                var r = dragW - (oDiv.offsetWidth);
                if (l < 0) l = 0;
                if (l > r) l = r;
                oDiv.style.left = px2rem(l)+'rem';
                $('.teacher').css('left', px2rem(-l*6.3)+'rem');
            }, { passive: true });
          }
          oDiv.addEventListener('touchend', function(){
            oDiv.onmousemove = null;
          }, { passive: true });
        }, { passive: true });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .box {
    width: 90%;
    height: auto;
    margin: 0 auto;
    margin-bottom: .35rem;
     .title {
      font-size: .16rem;
      color: #4A4A4A;
      border-bottom: 1px solid #E9E9E9;
      padding-bottom: .05rem;
      margin-bottom: .2rem;
      span {
        padding-bottom: .05rem;
        border-bottom: 1px solid #333;
      }
    }
    .teacher {
      width: 17.76rem;
      height: 5rem;
      display: flex;
      position: relative;
      .module {
        width: 2.8rem;
        height: 4.08rem;
        background: #fff;
        box-shadow: 0 4px 16px 0 #D0D0D0;
        border-radius: 4px;
        margin-right: .16rem;
        margin-top: .45rem;
        text-align: center;
        img {
          width: 1rem;
          height: 1rem;
          margin-top: -.2rem;
          padding-bottom: .2rem;
        }
        .p1 {
          font-size: .18rem;
          color: #4A4A4A;
          padding-bottom: .05rem;
        }
        .p2 {
          font-size: .13rem;
          color: #9D9D9D;
          padding-bottom: .1rem;
        }
        .p3 {
          font-size: .14rem;
          color: #4A4A4A;
          letter-spacing: 0.64px;
          line-height: .22rem;
          padding: 0 .2rem;
        }
      }
    }
    .drag {
      width: 100%;
      background: #bcc9d4;
      height: .05rem;
      position: relative;
      border-radius: .2rem;
      .plan {
        position: absolute;
        width: 1.12rem;
        height: 100%;
        background: #72D9C2;
        cursor: pointer;
        border-radius: .2rem;
      }
    }
  }

</style>
<style>
  .ww {
    width: 3.79rem;
  }
  .teacher div:nth-of-type(1) {
    border-top: 4px solid #08B3E3;
  }
  .teacher div:nth-of-type(2) {
    border-top: 4px solid #61DED4;
  }
  .teacher div:nth-of-type(7) {
    border-top: 4px solid #61DED4;
  }
  .teacher div:nth-of-type(3) {
    border-top: 4px solid #AB56ED;
  }
  .teacher div:nth-of-type(4) {
    border-top: 4px solid #FBC862;
  }
  .teacher div:nth-of-type(5) {
    border-top: 4px solid #FFAAC1;
  }
  .teacher div:nth-of-type(6) {
    border-top: 4px solid #08B3E3;
  }
  .swiper-container {
    width: 100%;
    height: auto;
  }
</style>
