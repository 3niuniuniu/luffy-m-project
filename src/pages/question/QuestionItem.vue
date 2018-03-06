<template>
  <div class="CourseProblem">
    <header-item message="常见问题"></header-item>
    <div class="cont">
      <p class="title">{{QuestionList[this.$route.query.id].headline}}</p>
      <ul>
        <li v-for="(item,index) in QuestionList[this.$route.query.id].question" :key="index">
          <p>{{item.name}}</p>
          <p v-html="item.cont"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderItem from '@/components/header'
import QuestionList from '../../mock/question/question.json'

export default {
  components: {
    HeaderItem,
  },
  data () {
    return {
      QuestionList: QuestionList
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .CourseProblem {
    width: 100%;
    height: auto;
    padding-top: .44rem;
    .cont {
      width: 100%;
      margin-left: .24rem;
      .title {
        font-size: .15rem;
        color: #4A4A4A;
        padding: .15rem 0;
        font-weight: 600;
        border-bottom: 1px solid #E9E9E9;
      }
      ul {
        width: 90%;
        margin-top: .1rem;
        font-size: .14rem;
        color: #4A4A4A;
        li {
          margin-bottom: .15rem;
        }
        p:nth-of-type(1) {
          margin-bottom: .1rem;
        }
        p:nth-of-type(2) {
          font-size: .13rem;
          line-height: .22rem;
        }
      }
    }
  }

</style>
