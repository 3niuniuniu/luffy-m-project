<template>
  <div class="inCourse">
    <p>
      爬虫开发课程
      <span>￥ 299</span>
    </p>
    <p>解锁更多高级爬虫知识，爬取你想要的数据!</p>
    <ul>
      <li>难度：中级</li>
      <li>时长：16小时</li>
      <li>人数：8人</li>
    </ul>
  </div>
</template>

<script>
export default {

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
