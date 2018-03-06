<template>
  <div class="Linux">
    <linux-pirce :pirceNum="pirceNum"></linux-pirce>
    <course-summarize :Summarize="Summarize"></course-summarize>
    <study-after-capacity></study-after-capacity>
    <study-process></study-process>
    <service></service>
    <linux-teacher></linux-teacher>
  </div>
</template>

<script>
import LinuxPirce from '../../home-python/python-introduce/PythonPrice'
import CourseSummarize from './CourseSummarize'
import StudyAfterCapacity from './StudyAfterCapacity'
import StudyProcess from './StudyProcess'
import Service from './Service'
import LinuxTeacher from '../../home-python/python-introduce/PythonTeacher'

export default {
  components: {
    LinuxPirce,
    CourseSummarize,
    StudyAfterCapacity,
    StudyProcess,
    Service,
    LinuxTeacher
  },
  props: ['pirceNum','Summarize'],
}
</script>

<style scoped>
  .Linux {
    font-family: PingFangSC-Light;
    padding-bottom: .4rem;
  }

</style>
