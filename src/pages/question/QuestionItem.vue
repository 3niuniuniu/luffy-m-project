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

export default {
  components: {
    HeaderItem,
  },
  data () {
    return {
      QuestionList: [
        {
          headline: '购买观看课程',
          question: [
            {
              name: '1、课程是否可以试听 ？',
              cont: '可以试听,在课程章节目录中标记有"试看"的标签的课程为可以免费观看的课程视频。'
            },
            {
              name: '2、如何选择最适合自己的课程 ？',
              cont: '路飞学城的课程大致分为“初级”、“中级”和“高级”三类。<br>a;初级课程：一般适用于学科知识零基础或者基础薄弱的学员。<br>b;中级课程：适用于掌握了一定的基础学科知识，但是想要进一步提升进阶的学员。<br>c;高级课程：适用于计算机基础知识掌握扎实，对自身专业能力有更高要求的学员。<br>点击每个课程详情页面中都详细介绍了这门课程的先修要求，若不具备先修要求，可以选择推荐的先修课程进行学习。'
            }
          ],
        },
        {
          headline: '使用&获取优惠劵',
          question: [
            {
              name: '33333',
              cont: '44444'
            }
          ],
        }
      ],
    }
  },
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
