<template>
  <div class="StudyCourse">
    <div class="sel">
      <select name="" id="" @change="getDataId" v-model="levelId">
        <option v-for="(item,index) in courseLevel" :key="index" :value="item.degree_courseid">{{item.degree_coursename}}</option>
      </select>
      <span></span>
    </div>
    <div class="course">专题课程</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: false,
      courseName: 'Python开发入门14天集训营',
      courseLevel: '',
      levelId: 5,
    }
  },
  mounted () {
    this.$http.get('/api/v1/myenroll/degreeCourse/').then(res => {
      if (res.data.error_no == 0) {
        this.courseLevel = res.data.data
      }
    })
  },
  methods: {
    CourseSelect (e) {
      if (e.target.nodeName == 'DIV' || e.target.nodeName == 'SPAN') {
        this.list = !this.list
      } else if (e.target.nodeName == 'LI') {
        this.courseName = e.target.innerHTML
        this.list = false
      }
    },
    //切换中高级
    getDataId () {
      this.$emit('studyCourse',this.levelId)
    }
  },
}
</script>

<style lang="scss" scoped>
  .StudyCourse {
    width: 100%;
    height: .7rem;
    background: #fff;
    box-shadow: 0 1px 0 0 rgba(0,0,0,0.10);
    display: flex;
    align-items: center;
    justify-content: space-around;
    .sel {
      position: relative;
      span {
        border: 5px solid transparent;
        border-left-color: #fff;
        position: absolute;
        right: .12rem;
        top: .155rem;
      }
      select {
        flex: 1;
        height: .4rem;
        background: #94DCD4;
        border: none;
        color:#fff;
        margin-left: .11rem;
        margin-right: .11rem;
        font-size: .12rem;
        position: relative;
      }
    }
    // div:nth-of-type(1) {
    //   background: #94DCD4;
    //   border-radius: 4px;
    //   color:#fff;
    //   margin: 0 .11rem;
    //   position: relative;
    //   span:nth-of-type(1) {
    //     width: 1.4rem;
    //     display: inline-block;
    //     padding-left: .1rem;
    //     white-space: nowrap;
    //     text-overflow: ellipsis;
    //     overflow: hidden;
    //   }
    //   span:nth-of-type(2) {
    //     border: 5px solid transparent;
    //     border-top-color: #fff;
    //     position: absolute;
    //     right: .16rem;
    //     top: .18rem;
    //   }
    //   ul {
    //     width: 100%;
    //     height: auto;
    //     background: #FFFFFF;
    //     box-shadow: 0 0 5px 0 rgba(0,0,0,0.12), 0 5px 12px 0 rgba(0,0,0,0.24);
    //     border-radius: 2px;
    //     li {
    //       font-size: .13rem;
    //       color: #000;
    //       text-align: left;
    //       padding-left: .1rem;
    //     }
    //     li:hover {
    //       background: #EEE;
    //     }
    //   }
    // }
    .course {
      flex: 1;
      height: .4rem;
      line-height: .4rem;
      border-radius: 4px;
      border: 1px solid #D0D0D0;
      color: #666;
      margin-right: .11rem;
      text-align: center;
      font-size: .14rem;
    }
  }
</style>
