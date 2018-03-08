<template>
  <div class="inCourse">
    <p>
      {{CourseItemPirce.name}}
      <span>￥ 299</span>
    </p>
    <p>{{CourseItemPirce.course_slogan}}</p>
    <ul>
      <li>难度：{{CourseItemPirce.level}}</li>
      <li>时长：{{CourseItemPirce.hours}}小时</li>
      <li>人数：{{CourseItemPirce.learnnumber}}人</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.query.id,
      CourseItemPirce: '',
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('/api/v1/coursedetailtop/?courseid=' + this.id).then(res => {
        this.CourseItemPirce = res.data.data
      })
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(this.$route.query.id)
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
  .inCourse {
    background: #fff;
    margin-bottom: .2rem;
    p:nth-of-type(1) {
      font-size: .18rem;
      color: #4A4A4A;
      padding-top: .26rem;
      padding-bottom: .12rem;
      margin-left: .2rem;
      margin-right: .2rem;
      span {
        font-size: .16rem;
        color: #FA6240;
        float: right;
      }
    }
    p:nth-of-type(2) {
      font-size: .12rem;
      color: #9B9B9B;
      margin-left: .2rem;
      margin-right: .2rem;
      padding-bottom: .14rem;
      border-bottom: 1px solid #DBDFE2;
    }
    ul {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        border-right: 1px solid #D0D0D0;
        margin-top: .12rem;
        margin-bottom: .12rem;
      }
      li:last-child {
        border: none;
      }
    }
  }
</style>
