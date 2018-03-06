<template>
  <div class="model">
    <div class="banner">
      <p class="p1">选择适合你的学习模式</p>
    </div>
    <div class="box">
      <div class="bigbox" v-haul>
        <div class="course" v-for="(item,index) in model" :key="index">
          <p class="p1">{{item.name}}</p>
          <p class="p2">{{item.pirce}}</p>
          <ul v-for="it in item.list" :key="it">
            <li>{{it}}</li>
          </ul>
        </div>
      </div>
      <div class="dragbox"><div class="haul" v-haul></div></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { px2rem } from '../../assets/js/utils';

Vue.directive('haul',function(el){
  var oDiv = el;
  oDiv.addEventListener('touchstart', function(ev){
    var disX = ev.touches[0].clientX-oDiv.offsetLeft;
    var margin = Number($('.course').css("margin-right").replace(/px/g, ''))*3;
    var parentW = $('.course').width() * 3 + margin;
    var dragW = $('.dragbox').width();
    if (oDiv.className === 'bigbox'){
      document.addEventListener('touchmove', function(ev) {
          var l = ev.touches[0].clientX-disX;
          var marginRight = $('.course').css("margin-right").replace(/px/g, '');
          var r = document.documentElement.clientWidth - marginRight - parentW;
          if (l > 0) l = 0;
          if (l < r) l = r;
          oDiv.style.left=px2rem(l)+'rem';
          $('.haul').css('left', px2rem(-l)+'rem');
      }, { passive: true });
    } else if (oDiv.className === 'haul') {
      document.addEventListener('touchmove', function(ev) {
          var l = ev.touches[0].clientX-disX;
          var r = dragW - (oDiv.offsetWidth);
          if (l < 0) l = 0;
          if (l > r) l = r;
          oDiv.style.left = px2rem(l)+'rem';
          $('.bigbox').css('left', px2rem(-l)+'rem');
      }, { passive: true });
    }
    document.addEventListener('touchend', function(){
      document.onmousemove = null;
    }, { passive: true });
  }, { passive: true });
});

export default {
 data () {
   return {
     model: [
       {
        name: 'Deluxe课程',
        pirce: '¥ 8999',
        list: ['服务周期6个月','10个技术模块，300+课时','全部课件、项目源码下载','加入课程学习群','知名网红讲师授课','真人出镜，专为线上录制','每个模块1v1视频考核','闯关式学习','作业代码逐行批改','1V1资深导师全程辅导','导师每周督促学习','推荐就业，一线城市10K起']
       },
       {
        name: 'SVIP课程',
        pirce: '¥ 19800',
        list: ['Deluxe课程全部服务','每周至少3次导师主动跟进督学','100%保证就业','保证一线城市12K起','实时在线答疑(10分钟响应)','每周1v1直播答疑','精确到天的导学安排','与线下面授课程无缝互转','1V1就业指导+面试简历修改','就业加速服务','BAT级别互联网名企优先推荐','50%学费返还计划']
       },
       {
        name: 'VVIP课程',
        pirce: '¥ 59800',
        list: ['SVIP课程全部服务','1V1知名百万年薪讲师全程辅导','100%保证就业','保证一线城市15K起','实时在线答疑(10分钟响应)','每周1次线下闭门辅导','就业加速服务','BAT级别互联网名企定制','3年Tesla计划','高端大牛同盟会员资格','认知&提升计划','北美IT移民计划']
       }
     ]
   }
 }
}
</script>

<style lang="scss" scoped>
  .model {
    width: 90%;
    height: auto;
    margin: 0 auto;
    padding-bottom: .6rem;
    .banner {
      width: 100%;
      height: .64rem;
      background: url('../../assets/svg/study-model.svg') no-repeat center center;
      background-size: cover;
      .p1 {
        text-align: center;
        line-height: .5rem;
        color: #fff;
        font-size: .14rem;
      }
    }
    .box {
      width: 100%;
      height: auto;
      margin-top: .16rem;
      .bigbox {
        width: 9rem;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        .course {
          width: 2rem;
          .p1 {
            font-size: .18rem;
            color: #4A4A4A;
            padding-bottom: .04rem;
          }
          .p2 {
            font-size: .16rem;
            color: #4A4A4A;
          }
          li {
            font-size: .12rem;
            color: #5E5E5E;
            padding-top: .09rem;
          }
        }
        .course:nth-of-type(2) {
          .p1,.p2,li {
            color: #BE51CE;
          }
        }
        .course:nth-of-type(3) {
          .p1,.p2,li {
            color: #01B4E4;
          }
        }
      }
      .dragbox {
        width: 100%;
        background: #bcc9d4;
        height: .05rem;
        position: relative;
        border-radius: .2rem;
        margin-top: .23rem;
        .haul {
          position: absolute;
          width: 1.12rem;
          height: 100%;
          background: #72D9C2;
          cursor: pointer;
          border-radius: .2rem;
        }
      }
    }
  }

</style>
