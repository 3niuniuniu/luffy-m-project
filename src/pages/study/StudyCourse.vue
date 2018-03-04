<template>
  <div class="StudyCourse">
    <div @click="CourseSelect($event)"><span>{{courseName}}</span><span></span>
      <ul v-show="list">
        <li>Python全栈开发中级</li>
        <li>Python全栈开发高级</li>
        <li>Linux全栈开发中级</li>
        <li>Linux全栈开发高级</li>
      </ul>
    </div>
    <div>专题课程</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: false,
      courseName: 'Python全栈开发中级',
    }
  },
  methods: {
    CourseSelect (e) {
      if (e.target.nodeName == 'DIV' || e.target.nodeName == 'SPAN') {
        this.list = !this.list
      } else if (e.target.nodeName == 'LI') {
        this.courseName = e.target.innerHTML
        this.list = false
      }
    }
  }
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
    div {
      flex: 1;
      height: .4rem;
      line-height: .4rem;
      font-size: .14rem;
    }
    div:nth-of-type(1) {
      background: #94DCD4;
      border-radius: 4px;
      color:#fff;
      margin: 0 .11rem;
      position: relative;
      span:nth-of-type(1) {
        padding-left: .1rem;
      }
      span:nth-of-type(2) {
        border: 5px solid transparent;
        border-top-color: #fff;
        position: absolute;
        right: .16rem;
        top: .18rem;
      }
      ul {
        width: 100%;
        height: auto;
        background: #FFFFFF;
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.12), 0 5px 12px 0 rgba(0,0,0,0.24);
        border-radius: 2px;
        li {
          font-size: .13rem;
          color: rgba(0,0,0,0.87);
          text-align: left;
          padding-left: .22rem;
        }
        li:hover {
          background: #EEE;
        }
      }
    }
    div:nth-of-type(2) {
      border-radius: 4px;
      border: 1px solid #D0D0D0;
      color: #666;
      margin-right: .11rem;
      text-align: center;
    }
  }
</style>
