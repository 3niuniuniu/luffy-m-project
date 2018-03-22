<template>
  <div class="study">
    <cell @click.native="showModuleAuto" v-if="onShow"></cell>
    <div v-if="isHaveUserInfo">
      <header-item message="爬虫开发实战"></header-item>
      <study-date></study-date>
      <study-course @studyCourse="studyCourse" @courseLength="courseLength"></study-course>
      <empty :emptyCont="emptyCont" v-if="length"></empty>
      <loading v-if="loading"></loading>
      <error-five v-if="error" class="error" :errorhint="errorhint"></error-five>
      <study-list :courseModule="courseModule" :loading="loading"></study-list>
    </div>
    <study-login v-if="!isHaveUserInfo"></study-login>
  </div>
</template>

<script>
import HeaderItem from '@/components/header'
import Loading from '@/components/loading'
import StudyDate from './StudyData'
import StudyCourse from './StudyCourse'
import StudyList from './StudyList'
import StudyLogin from './StudyLogin'
import Cookies from '../../assets/js/Cookie'
import ErrorFive from '@/components/500'
import Empty from '@/components/empty'
import { LoadMore, AlertModule, Alert, Group, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux'

export default {
  components: {
    HeaderItem,
    Loading,
    ErrorFive,
    StudyDate,
    StudyCourse,
    StudyList,
    StudyLogin,
    Empty
  },
  data () {
    return {
      levelId: 5,
      error: false,
      onShow: false,
      loading: true,
      courseModule: '',
      errorhint: '糟糕 发生错误了',
      isHaveUserInfo: false,
      emptyCont: '您还未购买过任何课程',
      length: '',
    }
  },
  watch: {
    $route() {
      this.CourseData();
      this.getUserInfo();
    },
  },
  mounted () {
    this.CourseData();
    this.getUserInfo();
  },
  methods: {
    CourseData () {
      this.$http.get('/api/v1/mydegreecourse/?degree_course_id=' + this.levelId).then(res => {
        this.loading = false
        this.error = false
        this.courseModule = res.data.data
      })
      .catch((res) => {
        this.loading = false
        this.showModuleAuto()
        this.error = true
      })
    },
    studyCourse (id) {
      this.levelId = id
      this.loading = true
      this.CourseData()
    },
    courseLength (len) {
      if (len == 0) {
        this.length = true
      } else {
        this.length = false
      }
    },
    showModule () {
      AlertModule.show({
        content: '糟糕 发生错误了',
      })
    },
    showModuleAuto () {
      this.showModule()
    },
    getUserInfo() {
      const info = window.localStorage.getItem('userInfo');
      this.isHaveUserInfo = info ? true : false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .study {
    overflow-y: scroll;
    padding-bottom: .52rem;
    height: auto;
    background: #f3f5f7;
    .error {
      margin-top: .8rem;
    }
  }
</style>
