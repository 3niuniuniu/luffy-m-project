<template>
  <div class="StudyList" v-show="!loading">
    <cell @click.native="showModuleAuto" v-show="onShow"></cell>
    <div class="list" @click="goVideo(item.status, item.last_study.current_study_record_id)" v-for="(item,index) in courseModule" :key="index">
      <p class="title"><span>{{item.course_module_name}}</span><span>{{item.status}}</span></p>
      <dl>
        <dt>
          <img :src="item.course_module_img" alt="">
          <p class="p1" v-if="item.status == '未开通'">未开通</p>
          <div v-else-if="item.progress != '未开通'">
            <p class="masking"></p>
            <p class="p2">学习到：{{item.progress}}%</p>
            <p class="p3"><span :style="{width: item.progress + '%'}"></span></p>
          </div>
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
import { LoadMore, AlertModule, Alert, Group, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux'

export default {
  props: ['courseModule','loading'],
  directives: {
    TransferDom
  },
  components: {
    LoadMore,
    Alert,
    Group,
    XSwitch,
    Cell
  },
  data () {
    return {
      onShow: false,
      id: '',
    }
  },
  mounted () {
  },
  methods: {
    goVideo (status, id) {
      this.id = id
      if (status == '未开通') {
        this.showModuleAuto()
      } else {
        this.$router.push({path: '/study/videocourse', query: {id: id}})
      }
    },
    showModule () {
      AlertModule.show({
        title: '抱歉',
        content: '此课程模块还未开通',
      })
    },
    showModuleAuto () {
      this.showModule()
      setTimeout(() => {
        AlertModule.hide()
      }, 1400)
    },
  },
}
</script>

<style lang="scss" scoped>
  .StudyList {
    width: 100%;
    height: auto;
    margin-top: .15rem;
    font-family: PingFangSC-Regular;
    .weui-dialog .weui-dialog__btn_primary {
      color: #72D9BA !important;
    }
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
          .p1 {
            width: 100%;
            height: 100%;
            background: #000;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0.4;
            color: #fff;
            font-size: .16rem;
            text-align: center;
            line-height: .67rem;
          }
          .p2{
            color:#fff;
            font-size: .12rem;
            position: absolute;
            left: .05rem;bottom: .18rem;
          }
          .p3 {
            width: 90%;
            height: .05rem;
            background: rgba(255,255,255,0.50);
            border: 1px solid #FFFFFF;
            border-radius: 26px;
            position: absolute;
            left: .05rem;
            bottom: .18rem;
            overflow: hidden;
            position: relative;
            span {
              display: inline-block;
              // width: 50%;
              height: 100%;
              background: #94DCD4;
              border-radius: 26px;
              position: absolute;
              left: 0;
              top: 0;
            }
          }
          .masking {
            width: 100%;
            height: 100%;
            background: #000;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0.4;
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
