<template>
  <div class="linux-course">
    <header-item message="路飞学城"></header-item>
    <img src="../../assets/img/pageimgs/linux-banner高级.png" alt="" class="banner">
    <linux-banner :bannerItem="bannerItem"></linux-banner>
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
    <linux-introduce
    v-show="num == 0"
    :pirceNum="pirceNum"
    :Summarize="Summarize"
    >
    </linux-introduce>
    <linux-catalogue v-show="num == 1" :CatalogueList="CatalogueList"></linux-catalogue>
    <linux-comment v-show="num == 2"></linux-comment>
    <linux-issue v-show="num == 3" :Issue="Issue"></linux-issue>
    <course-buy></course-buy>
  </div>
</template>

<script>
import HeaderItem from '@/components/header'
import LinuxBanner from './LinuxBanner'
import LinuxIntroduce from './linux-introduce/LinuxIntroduce'
import LinuxCatalogue from './linux-catalogue/LinuxCatalogue'
import CatalogueList from '../../mock/linux/catalogueAdvanced.json'
import LinuxComment from '../home-python/python-comment/PythonComment'
import LinuxIssue from '../courseitem/Issue'
import Issue from '../../mock/linux/linuxIssue.json'
import {Tab, TabItem} from 'vux'
import CourseBuy from '../courseitem/CourseBuy'


export default {
  components: {
    Tab,
    TabItem,
    HeaderItem,
    LinuxBanner,
    LinuxIntroduce,//简介
    LinuxCatalogue,//目录
    LinuxComment,//评价
    LinuxIssue,//问题
    CourseBuy
  },
  data () {
    return {
      bannerItem: {
        name: 'Linux云计算工程师高级',
        titleOne: '学习周期',
        time: '大约5～6个月',
        titleTwo: '难度',
        num: '中级',
        titleThree: '预期工资',
        people: '15K+'
      },
      list: [
				{text: '简介'},
				{text: '目录'},
				{text: '评价'},
        {text: '常见问题'},
      ],
      pirceNum: {
        name: 'Linux云计算工程师（高级）',
        pirce: '￥ 6000',
        cont: '深入学习Linux运维、云计算、DevOps持续集成、ELK日志分析、OpenStack云计算框架、Docker容器…',
        difficulty: '中级',
        period: '6个月',
        pay: '10k+'
      },
      Summarize: {
        con1: 'Linux是目前在互联网领域运用最广泛，发展历史非常悠久的操作系统。全球80%的IT业务都运行在Linux系统上，相比Windows，Linux系统开源、免费、稳定、安全的特性使其成为各企业运行业务的首选系统。你平日里玩的微信、微博、知乎、王者荣耀游戏、天猫、京东商城等都是运行在成千上万台Linux服务器上的。',
        con2: '还有一群你看不到的人，在保障着这些系统的运行，使其免受黑客攻击，使你可以24小时无尿点的跟朋友联网打游戏、用微信聊天扯淡、上天猫京东购物。他们是谁？这些技术大神就是Linux工程师，他们低调、腼腆，正在幕后用技术改变着世界。通过本课程的学习，你也可以跟他们一样，成为一名受人尊敬、用技术改变世界的Linux技术大牛！',
        time: '大约5～6个月',
        difficulty: '高级',
        money: '10～15K',
        condition: '必备条件：Linux云计算运维工程师中级知识'
      },
      CatalogueList: CatalogueList,
      Issue: Issue,
      index: 0,
      num: ''
    }
  },
  methods: {
    tab(ind) {
      this.num = ind
    },
  }
}
</script>

<style lang="scss" scoped>
  .linux-course {
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
