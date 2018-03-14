<template>
  <div class="box">
    <div class="list">
      <dl @click="goCourseItem(item.id)" v-for="(item,index) in courseList" :key="index">
        <dt><img :src="img_host+item.course_img" alt=""></dt>
        <dd>
          <p>{{item.name}}</p>
          <p>{{item.brief}}</p>
          <p>难度：{{item.level}}<span>专题</span></p>
          <p>¥ {{item.price}}</p>
        </dd>
      </dl>
      <!-- <dl @click="goPythone">
        <dt><img src="../../assets/img/pageimgs/banner1.png" alt=""></dt>
        <dd>
          <p>Python高级</p>
          <p>1111111111</p>
          <p>难度：高级<span>专题</span></p>
          <p>¥ 399.00</p>
        </dd>
      </dl> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: ['courseList'],
  methods: {
    ...mapMutations(['GET_COURSEID']),
    goCourseItem (id) {
      this.GET_COURSEID(id)
      this.$router.push({path:'/course/courseitem', query:{id: id}})
    },
    goPythone () {
      this.$router.push('/home/python-advanced')
    }
  },
  computed: mapState(['img_host'])
}
</script>

<style lang="scss" scoped>
  .box {
    width: 100%;
    height: 100%;
    background: #fff;
    .list {
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
