<template>
  <div class="course">
    <header-item message="课程"></header-item>
    <course-model></course-model>
  </div>
</template>

<script type="text/javascript">
import HeaderItem from '@/components/header'
import CourseModel from './CouserModel'

export default {
  components : {
    HeaderItem,
    CourseModel,
  },
}
</script>

<style lang="scss" scoped>
  .course {
    overflow-y: scroll;
    background: #f3f5f7;
  }
</style>
