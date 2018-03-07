<template>
  <div class="python-course">
    <!-- 高级 -->
    <header-item message="路飞学城"></header-item>
    <img src="../../assets/img/pageimgs/python-banner高级.png" alt="" class="banner">
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
    :TeacherList="TeacherList"
    :TutorList="TutorList"
    >
    </python-introduce>
    <python-catalog v-show="num == 1" :CourseList="CourseList"></python-catalog>
    <python-comment v-show="num == 2"></python-comment>
    <python-issue v-show="num == 3" :Issue="Issue"></python-issue>
    <course-buy></course-buy>
  </div>
</template>

<script>
import Vue from 'vue'
import HeaderItem from '@/components/header'
import PythonBanner from './PythonBanner'
import PythonIntroduce from './python-introduce/PythonIntroduce'
import PythonCatalog from './python-catalog/PythonCatalog'
import CourseBuy from '../courseitem/CourseBuy'
import CourseList from '../../mock/python/courseAdvanced.json'
import PythonComment from './python-comment/PythonComment'
import PythonIssue from '../courseitem/Issue'
import Issue from '../../mock/question/pythonIssue.json'
import {Tab, TabItem} from 'vux'

export default {
  components: {
    Tab,
    TabItem,
    HeaderItem,
    PythonBanner,
    PythonIntroduce,//简介
    PythonCatalog,//目录
    PythonComment,//评论
    PythonIssue,//常见问题
    CourseBuy
  },
  data () {
    return  {
      bannerItem: {
        name: 'Python全栈开发（高级）',
        titleOne: '本期开课时间',
        time: '03月01号',
        titleTwo: '本期限定席位',
        num: '50',
        titleThree: '课程预览人数',
        people: '3306'
      },
      list: [
				{text: '简介'},
				{text: '目录'},
				{text: '评价'},
        {text: '常见问题'},
      ],
      pirceNum: {
        name: 'Python全栈开发（高级）',
        pirce: '￥ 7999',
        cont: '学习数据分析、机器学习、无人驾驶等技术，掌握进入人工智能领域的必备技能',
        difficulty: '高级',
        period: '6个月',
        pay: '15k'
      },
      message: {
        contone: '跟随技术大牛，学习数据分析、机器学习、无人驾驶入门、自动化开发、GO语言开发等知识，成为互联网名企抢手的高端Python开发人才',
        conttwo: '学完后能达到的能力：1. 掌握使用Python进行数据分析的技术<br>2、熟悉机器学习、图像识别算法技术原理，掌握OpenCV、TensorFlow等组件的应用<br>3、熟悉无人驾驶入门技术原理及实现<br>4、具备开发各种复杂的自动化工作、监控、CMDB、主机管理系统等的能力。<br>5、掌握GO语言开发基础；'
      },
      msgTab: [
        {name: '基本信息',cont: 'Python开发中级  (4个阶段，共12章节)'},
        {name: '学习时间',cont: '2-4个小时 / 天 (大约5~6个月)'},
        {name: '难度',cont: '高级'},
        {name: '预计工资',cont: '15k+'},
        {name: '入学条件',cont: '掌握Python全栈开发(中级)必备技能'},
      ],
      CourseList: CourseList,
      TeacherList: '',
      TutorList: '',
      Issue: Issue,
      index: 0,
      num: ''
    }
  },
  mounted () {
    this.$http.get('/api/v1/degree_course/4/').then(res => {
      this.TeacherList = res.data.data.teacher_info.data
      this.TutorList = res.data.data.mentor_info.data
    })
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
  }
</style>
