<template>
  <div class="study">
    <div v-show="NotLogin">
      <header-item message="爬虫开发实战"></header-item>
      <study-date></study-date>
      <study-course @studyCourse="studyCourse"></study-course>
      <loading v-show="loading"></loading>
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

export default {
  components: {
    HeaderItem,
    Loading,
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
    }
  },
  mounted () {
    this.CourseData()
  },
  methods: {
    CourseData () {
      this.$http.get('/api/v1/mydegreecourse/?degree_course_id=' + this.levelId).then(res => {
        this.loading = false
        this.courseModule = res.data.data
      })
    },
    studyCourse (id) {
      this.levelId = id
      this.loading = true
      this.CourseData()
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
  }
</style>
