<template>
  <div class="StudyList" v-show="!loading">
    <div class="list" @click="goVideo()" v-for="(item,index) in courseModule" :key="index">
      <p class="title"><span>第{{index+1}}模块：{{item.course_module_name}}</span><span>{{item.status}}</span></p>
      <dl>
        <dt>
          <img :src="item.course_module_img" alt="">
          <p>{{item.progress}}</p>
          <p><span></span></p>
        </dt>
        <dd>
          <p>{{item.last_study.current_study_record}}</p>
          <p>{{item.study_time.usetime}}</p>
          <img src="../../assets/img/pageimgs/Shape2.png" alt="">
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { LoadMore } from 'vux'

export default {
  props: ['courseModule','loading'],
  components: {
    LoadMore
  },
  methods: {
    goVideo () {
      this.$router.push('/study/videocourse')
    }
  }
}
</script>

<style lang="scss" scoped>
  .StudyList {
    width: 100%;
    height: auto;
    margin-top: .15rem;
    .list {
      width: 100%;
      height: auto;
      background: #fff;
      margin-bottom: .15rem;
      .title {
        margin: 0 .1rem;
        box-shadow: 0 1px 0 0 rgba(0,0,0,0.10);
        padding: .1rem .12rem;
        span:nth-of-type(1) {
          width: 2.8rem;
          font-size: .12rem;
          color: #4E4E4E;
          display: inline-block;
        }
        span:nth-of-type(2) {
          float: right;
          color: #666;
        }
      }
      dl {
        margin: 0 .2rem;
        padding: .1rem 0;
        display: flex;
        dt {
          width: 1rem;
          height: .67rem;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          p:nth-of-type(1){
            color:#fff;
            font-size: .12rem;
            position: absolute;
            left: .05rem;bottom: .18rem;
          }
          p:nth-of-type(2) {
            width: 90%;
            height: .05rem;
            background: rgba(255,255,255,0.50);
            border: 1px solid #FFFFFF;
            border-radius: 26px;
            position: absolute;
            left: .05rem;bottom: .08rem;
            overflow: hidden;
            span {
              display: inline-block;
              width: 50%;
              height: 100%;
              background: #94DCD4;
              border-radius: 26px;
            }
          }
        }
        dd {
          flex: 1;
          color: #9B9B9B;
          padding-left: .19rem;
          position: relative;
          img {
            width: .07rem;
            height: .12rem;
            position: absolute;
            right: .1rem;top: 50%;
            margin-top: -.06rem;
          }
          p:nth-of-type(1) {
            width: 2rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: .14rem;
            padding-top: .05rem;
            padding-bottom: .11rem;
          }
          p:nth-of-type(2) {
            font-size: .12rem;
            width: 2rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
