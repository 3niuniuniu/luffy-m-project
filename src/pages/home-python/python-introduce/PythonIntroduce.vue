<template>
  <div>
    <python-pirce :pirceNum="pirceNum"></python-pirce>
    <python-message :message="message" :msgTab="msgTab"></python-message>
    <python-service></python-service>
    <python-teacher></python-teacher>
    <python-tutor></python-tutor>
  </div>
</template>

<script>
import PythonPirce from './PythonPrice'
import PythonMessage from './PythonMessage'
import PythonService from './PythonService'
import PythonTeacher from './PythonTeacher'
import PythonTutor from './PythonTutor'

export default {
  components: {
    PythonPirce,
    PythonMessage,
    PythonService,
    PythonTeacher,
    PythonTutor
  },
  props: ['pirceNum','message','msgTab'],
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>

</style>
