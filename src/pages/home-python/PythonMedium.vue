<template>
  <div class="python-course">
    <!-- 中级 -->
    <header-item message="路飞学城"></header-item>
    <img src="../../assets/img/pageimgs/python-banner中级.png" alt="" class="banner">
    <python-banner :bannerItem="bannerItem"></python-banner>
    <tab
      class="CourseTitle"
      :line-width="2"
      default-color="#84898E"
      active-color="#72D9C2"
      v-model="index">
      <tab-item
        v-for="(item,ind) in list"
        :key="ind"
        @click.native="tab(ind)">
        {{item.text}}
      </tab-item>
    </tab>
    <python-introduce v-show="num == 0"
    :pirceNum="pirceNum"
    :message="message"
    :msgTab="msgTab"
    >
    </python-introduce>
    <python-model v-show="num == 0"></python-model>
    <python-catalog v-show="num == 1" :CourseList="CourseList"></python-catalog>
    <python-comment v-show="num == 2"></python-comment>
    <python-issue v-show="num == 3" :Issue="Issue"></python-issue>
    <course-buy></course-buy>
  </div>
</template>

<script>
import HeaderItem from '@/components/header'
import PythonBanner from './PythonBanner'
import PythonIntroduce from './python-introduce/PythonIntroduce'
import PythonModel from './PythonModel'
import PythonCatalog from './python-catalog/PythonCatalog'
import CourseList from '../../mock/python/courseMedium.json'
import PythonComment from './python-comment/PythonComment'
import PythonIssue from '../courseitem/Issue'
import Issue from '../../mock/question/pythonIssue.json'
import CourseBuy from '../courseitem/CourseBuy'
import {Tab, TabItem} from 'vux'

export default {
  components: {
    Tab,
    TabItem,
    HeaderItem,
    PythonBanner,
    PythonIntroduce,//简介
    PythonModel,
    PythonCatalog,//目录
    PythonComment,//评论
    PythonIssue,//常见问题
    CourseBuy
  },
  data () {
    return  {
      list: [
				{text: '简介'},
				{text: '目录'},
				{text: '评价'},
        {text: '常见问题'},
      ],
      bannerItem: {
        name: 'Python全栈开发（中级）',
        time: '01月20号',
        num: '50',
        people: '3306'
      },
      pirceNum: {
        name: 'Python全栈开发（中级）',
        pirce: '￥ 8999',
        cont: '6个月炼成互联网行业抢手的Python全栈开发工程师',
        difficulty: '中级',
        period: '6个月',
        pay: '15k'
      },
      message: {
        contone: 'Python语言本身就像是一个万能兵器，其应用领域极为广泛，不同的企业用Python做的事情也不同。Python在每个擅长的领域都有非常多的知识值得我们花很多的精力学习，掌握的Python知识越多，就意味着更多的面试和工作机会。',
        conttwo: '学完后能达到的能力：学完后能本课程将从基础开始，逐渐带你深入OOP编程、网络编程、数据库开发、WEB开发等知识，毕业后，你将至少掌握以下能力:<br>1、熟练掌握计算机原理，熟悉Linux系统的使用；<br>2、熟练掌握Python函数\面向对象编程，可开发基于各种业务场景下的Python工具；<br>3、熟悉Socket网络编程、线程、进程知识，可以开发C/S架构的高并发的FTP文件共享软件；<br>4、熟练掌握数据库常用操作，掌握自行设计合理、可扩展表结构的能力；<br>5、熟练掌握缓存、队列等中间件技术，为以后开发大型项目打下坚实基础；<br>6、熟练掌握前端HTML/CSS/JS/Jquery/Bootstrap知识，熟练掌握Django WEB框架；<br>7、掌握开发实战项目BBS论坛、WEB微信、CRM软件、爬虫的能力；'
      },
      msgTab: [
        {name: '基本信息',cont: 'Python开发中级  (10个阶段，共24章节)'},
        {name: '学习时间',cont: '2-4个小时 / 天 (大约5~6个月)'},
        {name: '难度',cont: '中级'},
        {name: '预计工资',cont: '8-5k'},
        {name: '入学条件',cont: '掌握计算机日常使用，具备至少专科或以上学历'},
      ],
      CourseList: CourseList,
      Issue: Issue,
      index: 0,
      num: ''
    }
  },
  mounted () {
  },
  methods: {
    tab(ind) {
      this.num = ind
    },
  }
}
</script>

<style lang="scss" scoped>
  .python-course {
    width: 100%;
    height: auto;
    padding-top: .44rem;
    .banner {
      width: 100%;
      height: 2.1rem;
      position: absolute;
      left: 0;
      top: .44rem;
    }
    .service {
      width: 90%;
      margin: 0 auto;
      margin-bottom: .3rem;
      .title {
        font-size: .16rem;
        color: #4A4A4A;
        border-bottom: 1px solid #E9E9E9;
        padding-bottom: .05rem;
        margin-bottom: .2rem;
        span {
          padding-bottom: .05rem;
          border-bottom: 1px solid #333;
        }
      }
      .box {
        width: 100%;
        height: auto;
        background: #fff;
        box-shadow: 0 4px 0 0 #72D9C2;
        position: relative;
        .p1 {
          width: 1.66rem;
          height: .46rem;
          background: #72D9C2;
          font-size: .18rem;
          color: #FFFFFF;
          text-align: center;
          line-height: .46rem;
          position: absolute;
          left: 0;
          top: .26rem;
        }
        .p2 {
          font-size: .13rem;
          color: #4A4A4A;
          letter-spacing: 0.93px;
          line-height: .28rem;
          padding: 0 .14rem;
          padding-top: .98rem;
          padding-bottom: .62rem;
        }
      }
    }
  }
</style>
