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
        {question: '如何购买观看'},
        {question: '优惠券介绍'},
        {question: '贝里介绍'},
        {question: 'luffyX学位'},
        {question: '导师介绍'},
        {question: '奖学金制度'},
        {question: '学位作业要求'},
        {question: '版本提示'},
        {question: '课程购买协议'},
        {question: 'X学位购买协议'},
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
