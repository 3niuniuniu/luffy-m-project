<template>
  <div class="catalog">
    <div class="courselist" v-for="(item,index) in CourseList" :key="index">
      <p class="StageTitle" :class="{advBac:advBac}">{{item.phase}}</p>
      <div class="StageList">
        <p class="Stagep1">第{{index + 1}}阶段 - 学习目标</p>
        <p class="Stagep2" v-html="item.studyTarget"></p>
        <p class="Stagep3">{{item.chapters.length}}个章节 <span @click="LookSection($event)">查看更多</span></p>
        <ul>
          <li class="section" v-for="(val,ind) in item.chapters" :key="ind">
            <p class="SectionList"><span>{{val.chapterTitle}}</span><span @click="LookList($event)"></span></p>
            <div class="SectionCont">
              <span v-for="(v,i) in val.children" :key="i">{{v}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['CourseList'],
  data () {
    return {
      advBac: false
    }
  },
  mounted () {
    if (this.$route.name == 'python-advanced') {
      this.advBac = true
    } else {
      this.advBac = false
    }
  },
  methods: {
    LookSection (e) {
      $(e.target).parent().next().slideToggle();
      if (e.target.innerHTML == '查看更多') {
        e.target.innerHTML = '收起'
      } else {
        e.target.innerHTML = '查看更多'
      }
    },
    LookList (e) {
      $(e.target).parent().next().slideToggle();
      $(e.target).toggleClass('SlideDown');
    },
  }
}
</script>

<style lang="scss" scoped>
  .catalog {
    width: 100%;
    height: auto;
    margin-top: .2rem;
    margin-bottom: .7rem;
    .courselist {
      width: 90%;
      height: auto;
      margin: 0 auto;
      background: #fff;
      margin-bottom: .2rem;
      .StageTitle {
        height: .48rem;
        background: #72D9C2;
        border: 1px solid #E1E1E1;
        font-size: .14rem;
        color: #FFFFFF;
        line-height: .48rem;
        padding-left: .2rem;
      }
      .advBac {
        background: #E45A82;
      }
      .StageList {
        padding: .2rem;
        border: 1px solid #E6E6E6;
        border-top: none;
        .Stagep1 {
          font-size: .16rem;
          color: #333333;
          padding-bottom: .17rem;
        }
        .Stagep2 {
          font-size: .14rem;
          color: #626262;
          padding-bottom: .2rem;
        }
        .Stagep3 {
          font-size: .15rem;
          color: #333333;
          span {
            font-size: .12rem;
            color: #4A90E2;
          }
        }
        ul {
          width: 100%;
          height: auto;
          display: none;
          li {
            width: 100%;
            height: auto;
            margin-bottom: .1rem;
            .SectionList {
              height: .38rem;
              line-height: .38rem;
              background: #F6F6F6;
              border: 1px solid #E1E1E1;
              font-size: .12rem;
              color: #333333;
              padding-left: .1rem;
              margin-top: .12rem;
              span:nth-of-type(1) {
                width: 82%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                display: inline-block;
              }
              span:nth-of-type(2) {
                display: inline-block;
                border: .06rem solid transparent;
                border-left-color: #000;
                float: right;
                margin-top: .12rem;
                margin-right: .3rem;
                opacity: 0.54;
                cursor: pointer;
              }
              .SlideDown {
                transform: rotate(90deg);
              }
            }
            .SectionCont {
              height: auto;
              background: #FFFFFF;
              border: 1px solid #E6E6E6;
              border-top: none;
              padding-left: .3rem;
              padding-right: .3rem;
              padding-top: .3rem;
              padding-bottom: .2rem;
              display: none;
              span {
                display: block;
                font-size: .12rem;
                color: #333333;
                padding: .02rem 0;
              }
            }
          }
        }
      }
    }
  }
</style>
