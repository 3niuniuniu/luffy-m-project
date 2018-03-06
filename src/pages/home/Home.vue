<template>
	<div class="home">
    <header-item message="路飞学城"></header-item>
    <slider></slider>
    <degree-program></degree-program>
    <subject-course></subject-course>
    <subject-course></subject-course>
	</div>
</template>

<script type="text/javascript">
  import HeaderItem from '@/components/header'
  import Slider from './Slider'
  import DegreeProgram from './DegreeProgram'
  import SubjectCourse from './SubjectCourse'

	export default {
		components: {
      HeaderItem,
      Slider,
      DegreeProgram,
      SubjectCourse
		}
	}
</script>
<style lang="scss" scoped>
  .home {
    overflow-y: scroll;
    padding-bottom: .6rem;
    height: auto;
    background: #f3f5f7;
  }
</style>
