<template>
  <div class="study">
    <cell @click.native="showModuleAuto" v-show="onShow"></cell>
    <div v-show="NotLogin">
      <header-item message="爬虫开发实战"></header-item>
      <study-date></study-date>
      <study-course @studyCourse="studyCourse"></study-course>
      <loading v-show="loading"></loading>
      <error-five v-show="error" class="error"></error-five>
      <study-list :courseModule="courseModule" :loading="loading"></study-list>
    </div>
    <study-login v-show="!NotLogin"></study-login>
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
  },
  data () {
    return {
      NotLogin: Cookies.get('access_token'),
      levelId: 5,
      courseModule: '',
      loading: true,
      onShow: false,
      error: false,
    }
  },
  mounted () {
    this.CourseData()
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
    showModule () {
      AlertModule.show({
        title: '抱歉',
        content: '服务器发生错误',
      })
    },
    showModuleAuto () {
      this.showModule()
    },
  }
}
</script>

<style lang="scss" scoped>
  .study {
    overflow-y: scroll;
    padding-bottom: 2rem;
    height: auto;
    background: #f3f5f7;
    .error {
      margin-top: .8rem;
    }
  }
</style>
