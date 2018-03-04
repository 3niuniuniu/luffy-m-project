<template>
  <div class="question">
    <header-item message="常见问题"></header-item>
    <div class="list">
      <ul>
        <router-link tag="li" v-for="(item,index) in list" :to="{ name: 'QuestionItem', query: {id: index} }" :key="index">
          <p>{{item.question}}</p>
          <img src="../../assets/img/pageimgs/Shape2.png" alt="" class="img1">
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderItem from '@/components/header'

export default {
  components: {
    HeaderItem,
  },
  data () {
    return {
      list: [
        {question: '购买观看课程'},
        {question: '使用&获取优惠劵'},
        {question: '贝里介绍'},
        {question: '1V1辅导导师'},
        {question: '奖学金介绍'},
        {question: '专题课程付费协议'},
        {question: 'LuffyX学位课程培训协议'},
        {question: '版本提升'},
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .question {
    width: 100%;
    height: auto;
    padding-top: .44rem;
    .list {
      width: 100%;
      height: auto;
      background: #fff;
    }
    li {
      margin-left: .3rem;
      padding-right: .3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: .15rem;
      color: #4A4A4A;
      padding: .16rem;
      border-bottom: 1px solid #F5F5F5;
    }
    .img1 {
      width: .07rem;
      height: .12rem;
    }
  }
</style>
