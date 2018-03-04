<template>
  <div class="catalogue">
    <course-price></course-price>
    <catalog class="catalog"></catalog>
  </div>
</template>

<script>
import CoursePrice from './CoursePrice'
import Catalog from '../videocourse/Catalog'

export default {
  components: {
    CoursePrice,
    Catalog,
  }
}
</script>

<style lang="scss" scoped>
  .catalog {
    padding-bottom: .5rem;
  }
</style>
