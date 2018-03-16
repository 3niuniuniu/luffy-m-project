<template>
  <div class="box">
    <div class="model">
      <dl @click="goPythonM">
        <dt><img :src="img_host + '/static/frontend/degreecourse/1/Python21天入门必备_1509095274.4902391_1509417175.636855.png'" alt=""></dt>
        <dd>
          <p>Python全栈开发中级(中级)</p>
          <p>这个是学位课程简介</p>
          <p>难度：中级<span>学位</span></p>
          <p>¥ 8999.0</p>
        </dd>
      </dl>
      <dl @click="goLinuxM">
        <dt><img :src="img_host + '/static/frontend/degreecourse/3/Linux中级_banner_1514867305.0080712.jpeg'" alt=""></dt>
        <dd>
          <p>Linux云计算工程师(中级)</p>
          <p>Linux是一件无敌的铠甲</p>
          <p>难度：中级<span>学位</span></p>
          <p>¥ 8500.0</p>
        </dd>
      </dl>
      <dl @click="goPythoneA">
        <dt><img :src="img_host + '/static/frontend/degreecourse/1/Python21天入门必备_1509095274.4902391_1509417175.636855.png'" alt=""></dt>
        <dd>
          <p>Python全栈开发中级(高级)</p>
          <p>Python全栈开发中级 (高级) </p>
          <p>难度：中级<span>学位</span></p>
          <p>¥ 7999.0</p>
        </dd>
      </dl>
      <dl @click="goLinuxA">
        <dt><img :src="img_host + '/static/frontend/degreecourse/2/Linux高级_banner_1514867274.9981658.jpeg'" alt=""></dt>
        <dd>
          <p>Linux云计算工程师(高级)</p>
          <p>Linux云计算工程师 (高级) </p>
          <p>难度：中级<span>学位</span></p>
          <p>¥ 6500.0</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['img_host']),
  methods: {
    goPythonM () {
      this.$router.push({path: '/home/python-medium', query: {id: 1}})
    },
    goPythoneA () {
      this.$router.push({path: '/home/python-advanced', query: {id: 4}})
    },
    goLinuxM () {
      this.$router.push({path: '/home/linux-medium', query: {id: 2}})
    },
    goLinuxA () {
      this.$router.push({path: '/home/linux-advanced', query: {id: 3}})
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    width: 100%;
    height: 100%;
    background: #fff;
    .model {
      padding-left: .2rem;
      padding-right: .2rem;
      padding-top: 1rem;
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
        p:nth-of-type(1) {
          font-size: .15rem;
          color: #131F3C;
          letter-spacing: 0;
          padding-bottom: .07rem;
        }
        p:nth-of-type(2) {
          width: 2.2rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
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
    dl:last-child {
      border: none;
      padding-bottom: 0;
    }
  }
</style>
