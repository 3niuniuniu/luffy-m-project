<template>
  <div class="CourseItem">
    <header-item message="课程"></header-item>
    <div class="video">
      <div ref="videoPlay"></div>
    </div>
    <tab
      class="CourseTitle"
      :line-width="2"
      active-color="#72D9C2"
      v-model="index">
      <tab-item
        v-for="(item,ind) in list"
        :key="ind"
        @click.native="tab(ind)">
        {{item.text}}
      </tab-item>
    </tab>
    <introduce v-show="num == 0"
    :CourseItemPirce="CourseItemPirce"
    :CourseItemCont="CourseItemCont"
    ></introduce>
    <loading v-show="num == 1" v-if="this.loading == true"></loading>
    <empty :emptyCont="emptyCont" v-if="empty" v-show="num == 1"></empty>
    <catalog-list :courseItem="courseItem" v-show="num == 1" class="catalogs"></catalog-list>
    <evaluate :ItemComment="ItemComment" v-show="num == 2"></evaluate>
    <question :QuestionList="QuestionList" v-show="num == 3"></question>
    <course-buy :CouponList="CouponList" :name="name" :Package="Package"></course-buy>
  </div>
</template>

<script>
import Vue from 'vue'
import HeaderItem from '@/components/header'
import Introduce from './Introduce'
import CatalogList from './CatalogList'
import Evaluate from './Evaluate'
import CourseBuy from './CourseBuy'
import Question from './Question'
import {Tab, TabItem} from 'vux'
import Empty from '@/components/empty'
import Loading from '@/components/loading'
import { mapState } from 'vuex'

export default {
  components: {
    HeaderItem,
    Tab,
    TabItem,
    Introduce,//简介
    CatalogList,//目录
    Evaluate,//评价
    Question,//问题
    CourseBuy,//领取及购买
    Empty,
    Loading
  },
  data () {
    return {
      list: [
				{text: '简介'},
				{text: '目录'},
				{text: '评价'},
        {text: '常见问题'},
      ],
      num: 0,
      index: 0,
      CourseItemPirce: '',
      CourseItemCont: '',
      courseItem: '',
      ItemComment: '',
      QuestionList: '',
      CouponList: '',
      Package: '',
      name: '',
      empty: false,
      emptyCont: '暂无课程目录',
      loading: true,
      videoLink: '',
    }
  },
  mounted () {
    this.getPirce(this.course_id)
    this.getCont(this.course_id)
    this.getCourse(this.course_id)
    this.getComment(this.course_id)
    this.getQuestion(this.course_id)
    this.getCoupon(this.course_id)
  },
  methods: {
    tab(ind) {
      this.num = ind
    },
    getCourse (id) {
      this.$http.get('/api/v1/course_sections/?courseid=' + id).then(res => {
        this.loading = false
        this.courseItem = res.data.data
        if (this.courseItem.length == 0) {
          this.empty = true
        } else {
          this.empty = false
        }
      })
    },
    getComment (id) {
      this.$http.get('/api/v1/coursereview/?courseid=' + id).then(res => {
        this.ItemComment = res.data.data
      })
    },
    getQuestion (id) {
      this.$http.get('/api/v1/course_questions/?course_id=' + id).then(res => {
        this.QuestionList = res.data.data
      })
    },
    getPirce (id) {
      this.$http.get('/api/v1/coursedetailtop/?courseid=' + id).then(res => {
        this.CourseItemPirce = res.data.data
        this.name = this.CourseItemPirce.name
        this.videoLink = res.data.data.video_brief_link
        this.$refs.videoPlay.innerHTML = ''
        var videoBox = document.createElement('script')
        videoBox.setAttribute('src',`https://p.bokecc.com/player?vid=${this.videoLink}&siteid=D90C6BABEBFD8C03&autoStart=false&playerid=94B724260B49E936&playertype=1`)
        this.$refs.videoPlay.appendChild(videoBox)
      })
    },
    getCont (id) {
      this.$http.get('/api/v1/coursedetail/?courseid=' + id).then(res => {
        this.CourseItemCont = res.data.data
        this.Package = res.data.data.prices
      })
    },
    getCoupon (id) {
      this.$http.get('/api/v1/coupon/list/?course=' + id).then(res => {
        this.CouponList = res.data.data
      })
    },
  },
  computed: mapState(['course_id']),
  watch: {
    '$route' (to, from) {
      this.getPirce(this.course_id)
      this.getCont(this.course_id)
      this.getCourse(this.course_id)
      this.getComment(this.course_id)
      this.getQuestion(this.course_id)
      this.getCoupon(this.course_id)
    }
  },
}
</script>

<style lang="scss" scoped>
  .CourseItem {
    .video {
      width: 100%;
      height: 2.11rem;
      margin-top: .43rem;
    }
    .CourseTitle {
      display: flex;
      align-items: center;
      background: #fff;
      border-bottom: 1px solid #D9DDE1;
      margin-top: -.2rem;
      span{
        flex: 1;
        text-align: center;
        font-size: .14rem;
        padding: .14rem 0;
        cursor: pointer;
        color: #84898E;
      }
      .active {
        color: #72D9C1;
        border-bottom: 2px solid #72d9c1;
      }
    }
    .catalogs {
      padding-bottom: .5rem !important;
    }
  }
</style>
