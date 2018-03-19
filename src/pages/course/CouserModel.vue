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
    <error-five :errorhint="errorhint" v-show="error" class="error"></error-five>
    <div class="cont" v-show="!loading">
      <empty v-if="empty" :emptyCont="emptyCont" class="empty"></empty>
      <luffy-x-list v-if="sub_category == 0"></luffy-x-list>
      <course-list :courseList="courseList" v-else-if="sub_category !== 0"></course-list>
    </div>
	</view-box>
</template>

<script>
import Vue from 'vue'
import CourseList from './CourseList'
import LuffyXList from './LuffyXList'
import Loading from '@/components/loading'
import Empty from '@/components/empty'
import ErrorFive from '@/components/500'
import {ViewBox, Tab, TabItem} from 'vux'

export default {
  components: {
    CourseList,
    LuffyXList,
    Loading,
    Empty,
    Tab,
    TabItem,
    ViewBox,
    ErrorFive
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
      empty: false,
      emptyCont: '暂无课程列表',
      errorhint: '服务器发生错误',
      error: false,
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
        if (this.courseList.length == 0) {
          this.empty = true
        } else {
          this.empty = false
        }
      })
      .catch(() => {
        this.loading = false
        this.error = true
        if (this.sub_category == 0) {
          this.error = false
        }
      })
    },
    tab(ind, sub_category) {
      this.loading = true
      this.error = false
      this.num = ind
      this.sub_category = sub_category
      if (this.sub_category == 0) {
        this.error = false
        this.empty = false
      }
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
      font-size: .14rem;
      font-family: PingFangSC-Regular;
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
  .error {
    width: 100%;
    height: 100%;
    padding-top: 4.5rem;
  }
</style>
