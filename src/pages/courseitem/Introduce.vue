<template>
  <div class="introduce">
    <div class="inCourse">
      <p>
        {{CourseItemPirce.name}}
        <span>￥ 299</span>
      </p>
      <p>{{CourseItemPirce.course_slogan}}</p>
      <ul>
        <li>难度：{{CourseItemPirce.level}}</li>
        <li>时长：{{CourseItemPirce.hours}}小时</li>
        <li>人数：{{CourseItemPirce.learnnumber}}人</li>
      </ul>
    </div>
    <div class="bac" value="课程概述">
      <p class="tit">课程概述</p>
      <div class="cont">
        {{CourseItemCont.brief}}
      </div>
    </div>
    <div class="bac" value="为什么学习这门课程？">
      <p class="tit">为什么学习这门课程？</p>
      <div class="cont">
        {{CourseItemCont.why_study}}
      </div>
    </div>
    <div class="service" value="你将获得的服务">
      <p class="title">你将获得的服务</p>
      <div class="serviceCont">
        <dl>
          <dt><img src="../../assets/img/icon/Page 4.png" alt=""></dt>
          <dd>
            <p>精彩内容</p>
            <p>知名网红讲师根据企业<br>真实需求精心打造的课程内容</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../assets/img/icon/Page 3.png" alt=""></dt>
          <dd>
            <p>资料下载</p>
            <p>全部课件、笔记、案例下载</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../assets/img/icon/Page 2.png" alt=""></dt>
          <dd>
            <p>获得伙伴</p>
            <p>加入学习群，<br>和众多小伙伴一起学习</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../assets/img/icon/Page 1.png" alt=""></dt>
          <dd>
            <p>老师解答</p>
            <p>群导师答疑<br>减少自学走弯路时间</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../assets/img/icon/Fill 1.png" alt=""></dt>
          <dd>
            <p>对话ALEX</p>
            <p>Alex老师精心熬制的心灵洗脑<br>鸡汤，帮你拨云见日看清人生路</p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="LearnCont" value="我将学到哪些内容">
      <p class="title">我将学到哪些内容？</p>
      <div class="PROJECT" v-for="(item,index) in CourseItemCont.courseoutline" :key="index">
        <p>PROJECT {{index+1}}</p>
        <p>{{item.outline_tittle}}</p>
        <ul>
          <li>{{item.outline_content}}</li>
        </ul>
      </div>
    </div>
    <div class="help" value="此项目如何有助于我的职业生涯">
      <p>此项目如何有助于我的职业生涯？</p>
      <p>{{CourseItemCont.career_improvement}}</p>
      <p>课程先修要求</p>
      <p>{{CourseItemCont.prerequisite}}</p>
      <p v-if="CourseItemCont.recommend_coursesinfo.length != 0">推荐课程</p>
      <p v-for="(item,index) in CourseItemCont.recommend_coursesinfo" class="p1" :key="index">{{item.coursename}}</p>
    </div>
    <div class="teacher" v-for="(item,index) in CourseItemCont.teachersinfo" :key="index">
      <p>爬虫开发讲师，路飞学城讲师</p>
      <img :src="item.image" alt="">
      <p>{{item.teachername}}</p>
      <p>{{item.teacherbrief}}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['CourseItemPirce', 'CourseItemCont'],
}
</script>

<style lang="scss" scoped>
  .introduce {
    width: 100%;
    height: auto;
    background: #f3f5f7;
    padding-bottom: .5rem;
    .inCourse {
      background: #fff;
      margin-bottom: .2rem;
      p:nth-of-type(1) {
        font-size: .18rem;
        color: #4A4A4A;
        padding-top: .26rem;
        padding-bottom: .12rem;
        margin-left: .2rem;
        margin-right: .2rem;
        font-family: PingFangSC-Regular;
        span {
          font-size: .16rem;
          color: #FA6240;
          float: right;
        }
      }
      p:nth-of-type(2) {
        font-size: .12rem;
        color: #9B9B9B;
        margin-left: .2rem;
        margin-right: .2rem;
        padding-bottom: .14rem;
        border-bottom: 1px solid #DBDFE2;
      }
      ul {
        display: flex;
        li {
          flex: 1;
          text-align: center;
          border-right: 1px solid #D0D0D0;
          margin-top: .12rem;
          margin-bottom: .12rem;
        }
        li:last-child {
          border: none;
        }
      }
    }
    .tit {
      font-size: .15rem;
      color: #323A42;
      padding-left: .2rem;
      padding-top: .2rem;
      padding-bottom: .15rem;
      font-family: PingFangSC-Regular;
    }
    .cont {
      padding-left: .2rem;
      padding-right: .2rem;
      padding-bottom: .24rem;
      font-size: .12rem;
      color: #666;
      line-height: .2rem;
    }
    .bac {
      background: #fff;
      margin-bottom: .2rem;
    }
    .service {
      background: #72D9BC;
      height: 4.36rem;
      position: relative;
      .title {
        font-size: .2rem;
        color: #FFFFFF;
        text-align: center;
        padding-top: .22rem;
        padding-bottom: .15rem;
        font-family: PingFangSC-Regular;
      }
      .serviceCont {
        height: 4.36rem;
        margin: 0 auto;
        background: #fff;
        width: 3.17rem;
        border-radius: 5px;
        box-shadow: 0 4px 16px #9ee1d0;
        dl {
          margin-left: .3rem;
          margin-right: .3rem;
          padding-bottom: .23rem;
          display: flex;
          align-items: center;
          dt{
            width: .45rem;
            height: auto;
            margin-right: .3rem;
            img {
              width: 100%;
              height: auto;
            }
          }
          dd {
            p:nth-of-type(1){
              font-size: .14rem;
              color: #72D9BC;
              padding-bottom: .05rem;
            }
            p:nth-of-type(2) {
              font-size: .12rem;
              color: #666666;
            }
          }
        }
        dl:nth-of-type(1) {
          padding-top: .29rem;
        }
      }
    }
    .LearnCont {
      height: auto;
      background: #f3f5f7;
      .title{
        font-size: .2rem;
        color: #323A42;
        text-align: center;
        padding-top: 1rem;
        padding-bottom: .2rem;
        font-family: PingFangSC-Regular;
      }
      .PROJECT:last-child{
        margin-bottom: 0;
      }
      .PROJECT {
        background: #fff;
        padding-left: .29rem;
        margin-bottom: .2rem;
        font-family: PingFangSC-Medium;
        p:nth-of-type(1) {
          font-size: .14rem;
          color: #9B9B9B;
          padding: .3rem 0;
        }
        p:nth-of-type(2){
          font-size: .18rem;
          color: #333333;
          padding-bottom: .19rem;
        }
        ul {
          font-size: .12rem;
          color: #5E5E5E;
          padding-right: .2rem;
          padding-bottom: .4rem;
          li {
            line-height: .26rem;
          }
        }
      }
    }
    .help {
      text-align: center;
      color: #5E5E5E;
      p:nth-of-type(1) {
        padding-top: .32rem;
        padding-bottom: .15rem;
        font-size: .14rem;
        color: #5E5E5E;
      }
      p:nth-of-type(2) {
        font-size: .12rem;
        color: #5E5E5E;
        padding: 0 .12rem;
        padding-bottom: .24rem;
        line-height: .2rem;
        text-align: center;
      }
      p:nth-of-type(3) {
        font-size: .16rem;
        color: #5E5E5E;
        padding-bottom: .12rem;
      }
      p:nth-of-type(4) {
        font-size: .12rem;
        color: #5E5E5E;
        padding: 0 .12rem;
        padding-bottom: .18rem;
        line-height: .22rem;
      }
      p:nth-of-type(5) {
        font-size: .16rem;
        color: #5E5E5E;
      }
      .p1 {
        font-size: .16rem;
        color: #4A90E2;
        padding-top: .05rem;
      }
      .p1:last-child {
        padding-bottom: .3rem;
      }
    }
    .teacher {
      margin: 0 auto;
      margin: 0 .3rem;
      background: #FFFFFF;
      box-shadow: 0 4px 8px 0 #E8E8E8;
      border-radius: 6px;
      text-align: center;
      margin-bottom: .2rem;
      p:nth-of-type(1) {
        font-size: .2rem;
        color: #333333;
        padding-top: .3rem;
        padding-bottom: .2rem;
        font-family: PingFangSC-Regular;
      }
      img {
        width: 1rem;
        height: 1rem;
        border-radius: 100px;
      }
      p:nth-of-type(2) {
        font-size: .18rem;
        color: #4A4A4A;
        padding: .12rem;
        font-family: PingFangSC-Regular;
      }
      p:nth-of-type(3) {
        font-size: .12rem;
        color: #4A4A4A;
        line-height: .22rem;
        padding: 0 .26rem;
        text-align: left;
        padding-bottom: .4rem;
      }
    }
  }
</style>
