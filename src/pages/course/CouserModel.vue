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
				@click.native="tab(ind)">
				{{item.text}}
			</tab-item>
		</tab>

    <div class="cont">
      <python v-show="num == 0"></python>
      <linux v-show="num == 1"></linux>
      <luffy v-show="num == 2"></luffy>
    </div>
	</view-box>
</template>

<script>
import Vue from 'vue'
import Python from './Python'
import Linux from './Linux'
import Luffy from './Luffy'
import {ViewBox, Tab, TabItem} from 'vux'

export default {
  components: {
    Python,
    Linux,
    Luffy,
    Tab,
    TabItem,
    ViewBox
  },
  data() {
    return {
      tabs: ['Python','Linux','LuffyX','前端'],
      num: 0,
      list: [
				{
					tag: 'Python',
          text: 'Python',
				},
				{
					tag: 'Linux',
					text: 'Linux'
				},
				{
					tag: 'LuffyX',
					text: 'LuffyX'
				},
				{
					tag: 'needComment',
					text: '前端'
        },
      ],
      index: 0,
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
</style>
