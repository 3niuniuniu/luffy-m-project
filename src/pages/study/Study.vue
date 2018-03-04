<template>
  <div class="study">
    <div v-show="NotLogin">
      <header-item message="爬虫开发实战"></header-item>
      <study-date></study-date>
      <study-course></study-course>
      <study-list></study-list>
    </div>
    <study-login v-show="!NotLogin"></study-login>
  </div>
</template>

<script>
import HeaderItem from '@/components/header'
import StudyDate from './StudyData'
import StudyCourse from './StudyCourse'
import StudyList from './StudyList'
import StudyLogin from './StudyLogin'
import Cookies from '../../assets/js/Cookie'

export default {
  components: {
    HeaderItem,
    StudyDate,
    StudyCourse,
    StudyList,
    StudyLogin
  },
  data () {
    return {
      NotLogin: Cookies.get('access_token')
    }
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
