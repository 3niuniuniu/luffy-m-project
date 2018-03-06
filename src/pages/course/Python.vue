<template>
  <div class="python">
    <div>
      <dl @click="goCourseItem">
        <dt><img src="../../assets/img/pageimgs/banner1.png" alt=""></dt>
        <dd>
          <p>爬虫开发实战</p>
          <p>解锁更多高级爬虫知识，爬取你想要解锁更多高级爬虫知识，爬取你想要</p>
          <p>难度：高级<span>专题</span></p>
          <p>¥ 399.00</p>
        </dd>
      </dl>
      <dl @click="goPythone">
        <dt><img src="../../assets/img/pageimgs/banner1.png" alt=""></dt>
        <dd>
          <p>Python高级</p>
          <p>1111111111</p>
          <p>难度：高级<span>专题</span></p>
          <p>¥ 399.00</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goCourseItem () {
      this.$router.push('/course/courseitem')
    },
    goPythone () {
      this.$router.push('/home/python-advanced')
    }
  }
}
</script>

<style lang="scss" scoped>
  .python {
    width: 100%;
    height: 100%;
    background: #fff;
    div {
      padding-left: .2rem;
      padding-right: .2rem;
      padding-top: 1rem;
    }
    dl:last-child {
      border: none;
    }
    dl {
      width: 100%;
      display: flex;
      margin-bottom: .22rem;
      border-bottom: 1px solid #DBDFE2;
      padding-bottom: .2rem;
      dt {
        width: 1rem;
        height: .67rem;
        border-radius: .04rem;
        img {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      }
      dd {
        flex: 1;
        padding-left: .1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        p:nth-of-type(1) {
          font-size: .15rem;
          color: #131F3C;
          letter-spacing: 0;
          padding-bottom: .07rem;
        }
        p:nth-of-type(2) {
          font-size: .12rem;
          color: #909CB7;
          padding-bottom: .05rem;
        }
        p:nth-of-type(3) {
          font-size: .12rem;
          color: #909CB7;
          padding-bottom: .06rem;
          span {
            display: inline-block;
            width: .29rem;
            border: 1px solid #72D998;
            border-radius: 2px;
            text-align: center;
            color: #72D998;
            margin-left: .1rem;
          }
        }
        p:nth-of-type(4) {
          font-size: .12rem;
          color: #FA6240;
        }
      }
    }
  }
</style>
