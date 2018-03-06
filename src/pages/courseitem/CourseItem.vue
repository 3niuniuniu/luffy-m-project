<template>
  <div class="CourseItem">
    <header-item message="课程"></header-item>
    <div class="video"></div>
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
    <introduce v-show="num == 0"></introduce>
    <catalogue v-show="num == 1"></catalogue>
    <evaluate v-show="num == 2"></evaluate>
    <issue v-show="num == 3"></issue>
    <course-buy></course-buy>
  </div>
</template>

<script>
import HeaderItem from '@/components/header'
import Introduce from './Introduce'
import Catalogue from './Catalogue'
import Evaluate from './Evaluate'
import CourseBuy from './CourseBuy'
import Issue from './Issue'
import {Tab, TabItem} from 'vux'
// import GetCoupon from './GetCoupon'

export default {
  components: {
    HeaderItem,
    Tab,
    TabItem,
    Introduce,//简介
    Catalogue,//目录
    Evaluate,//评价
    CourseBuy,//领取及购买
    Issue,
    // GetCoupon
  },
  data () {
    return {
      list: [
				{
          text: '简介',
				},
				{
					text: '目录'
				},
				{
					text: '评价'
        },
        {
					text: '常见问题'
				},
      ],
      num: 0,
      index: 0,
    }
  },
  methods: {
    tab(ind) {
      this.num = ind
    }
  }
}
</script>

<style lang="scss" scoped>
  .CourseItem {
    .video {
      width: 100%;
      height: 2.11rem;
      background: red;
    }
    .CourseTitle {
      display: flex;
      align-items: center;
      background: #fff;
      border-bottom: 1px solid #D9DDE1;
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
  }
</style>
