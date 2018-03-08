<template>
  <view-box>
		<tab
			class="tab"
			:line-width="2"
			active-color="#72D9C2"
			v-model="index">
			<tab-item
				v-for="(item,ind) in list"
        :key="ind"
				@click.native="tab(ind, item.sub_category)">
				{{item.text}}
			</tab-item>
		</tab>

    <loading v-show="loading" class="loading"></loading>
    <div class="cont" v-show="!loading">
      <empty v-if="courseList.length == 0" :emptyCont="emptyCont" class="empty"></empty>
      <course-list :courseList="courseList" v-else></course-list>
    </div>
	</view-box>
</template>

<script>
import Vue from 'vue'
import CourseList from './CourseList'
import Loading from '@/components/loading'
import Empty from '@/components/empty'
import {ViewBox, Tab, TabItem} from 'vux'

export default {
  components: {
    CourseList,
    Loading,
    Empty,
    Tab,
    TabItem,
    ViewBox,
  },
  data() {
    return {
      list: [
        {tag: 'Python',text: 'Python', sub_category: 1},
				{tag: 'Linux',text: 'Linux', sub_category: 2},
				{tag: 'LuffyX',text: 'LuffyX', sub_category: 0},
				{tag: 'needComment',text: '前端', sub_category: 3},
      ],
      num: 0,
      index: 0,
      sub_category: 1,
      courseList: '',
      loading: true,
      emptyCont: '暂无课程列表'
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('/api/v1/course/list/?sub_category=' + this.sub_category).then(res => {
        this.loading = false
        this.courseList = res.data.data
      })
    },
    tab(ind, sub_category) {
      this.num = ind
      this.sub_category = sub_category
      this.getData()
    },
  }
}
</script>

<style lang="scss" scoped>
  .course {
    margin-top: .44rem;
    .tab {
      width: 100%;
      height: .4rem;
      background: #FFFFFF;
      box-shadow: 0 1px 0 0 #E8E8E8;
      position: fixed;
      left: 0;
      top:.44rem;
      z-index: 999;
      span {
        display: inline-block;
        margin: 0 .2rem;
        line-height: .4rem;
        font-size: .14rem;
        color: #4A4A4A;
      }
      .active {
        border-bottom: 2px solid #72D9C2;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.6s ease;
    transform: translate3d(-100%, 0, 0);
  }
  .fade-enter, .fade-leave-active {
    opacity: 0.75;
    transform: translate3d(-100%, 0, 0);
    transition: .3s;
    overflow: hidden;
  }
  .loading {
    margin-top: 1rem !important;
  }
  .empty {
    margin-top: 1rem !important;
  }
</style>
