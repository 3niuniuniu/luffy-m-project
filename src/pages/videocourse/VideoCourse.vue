<template>
  <div class="videopage">
    <div class="title">
      <img src="../../assets/img/pageimgs/back_arrow.png" alt="" @click="goBack">
      <span>{{nowName}}</span>
    </div>
    <div class="video"></div>
    <p class="log">课程目录</p>
    <loading v-show="loading"></loading>
    <div class="catalog">
      <div class="chapter" v-for="(item,index) in videoDirectory.coursechapters" :key="index">
        <p class="num">{{item.name}}</p>
        <ul class="list">
          <li v-for="(itm,ind) in item.coursesections" :key="ind">
            <p>{{itm.name}}</p>
            <p><span>{{itm.duration}}</span></p>
          </li>
        </ul>
        <div class="more" @click="More($event)">点击查看更多</div>
      </div>
    </div>
    <cell @click.native="showModuleAuto" v-show="onShow"></cell>
  </div>
</template>

<script>
import Loading from '@/components/loading'
import { LoadMore, AlertModule, Alert, Group, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Loading,
    LoadMore,
    Alert,
    Group,
    XSwitch,
    Cell
  },
  data () {
    return {
      allH: false,
      videoToken: '',
      nowName: '',
      videoDirectory: '',
      loading: true,
      onShow: false
    }
  },
  mounted () {
    this.getToken()
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    showModule () {
      AlertModule.show({
        title: '抱歉',
        content: '您还未购买此视频',
      })
    },
    showModuleAuto () {
      this.showModule()
      setTimeout(() => {
        AlertModule.hide()
      }, 2000)
      // setTimeout(() => {
      //   this.$router.push('/home')
      // }, 2100)
    },
    More (e) {
      this.allH = !this.allH
      if (this.allH) {
        e.target.innerHTML = '点击收起'
        e.target.previousElementSibling.style.height = 'auto'
        e.target.style.color = '#9B9B9B'
      } else {
        e.target.innerHTML = '点击查看更多'
        e.target.previousElementSibling.style.height = '2.05rem'
        e.target.style.color = '#4a4a4a'
      }
    },
    getToken () {
      this.$http.get('/api/v1/video/enter_auth/?section_id='+this.$route.query.id).then(res => {
        if (res.data.error_no == 0) {
          this.videoToken = res.data.data.enter_play_token
          this.getCourse()
        } else {
          this.loading = false
          if(this.$route.name == 'VideoCourse') {
            this.showModuleAuto()
          }
        }
      })
    },
    getCourse () {
      this.$http.get('/api/v1/study/course_catalog/?courseSectionId='+this.$route.query.id+'&enter_play_token='+this.videoToken).then(res => {
        this.loading = false
        this.nowName = res.data.data.section_name
        this.videoDirectory = res.data.data
      })
    },
  },
  watch: {
    '$route' (to, from) {
      if (from.path == '/study') {
        this.getToken()
      }
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
  .catalog {
    height: auto;
    .chapter {
      margin-bottom: .2rem;
      background: #fff;
      .num {
        font-size: .14rem;
        color: #9B9B9B;
        padding: .11rem .2rem;
      }
      .list {
        width: 100%;
        height: 2.05rem;
        overflow: hidden;
        border-top: 1px solid #dfe3e6;
        border-bottom: 1px solid #dfe3e6;
        li:hover {
          color: #72D9C2;
        }
        li {
          padding-top: .2rem;
          padding-left: .2rem;
          font-size: .12rem;
          color: #4A4A4A;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          p:nth-of-type(1) {
            width: 3rem;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p:nth-of-type(2) {
            color: #9B9B9B;
            padding-right: .1rem;
            span {
              width: .5rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: height;
              display: inline-block;
              letter-spacing: 1px;
            }
          }
        }
        li:last-child {
          padding-bottom: .2rem;
        }
      }
      .more {
        padding: .12rem 0;
        text-align: center;
        color: #4A4A4A;
      }
      .allH {
        height: auto;
      }
      .packCol {
        color: #9B9B9B;
      }
    }
  }
  .chapter:last-child {
    margin-bottom: 0;
  }
</style>
