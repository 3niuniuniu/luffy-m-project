<template>
<!-- :class="{fixed:isFixedHeader}" -->
	<div class="nav">
		<ul>
      <li>
        <router-link to="/home"><b class="iconfont icon-shouye"></b>首页</router-link>
			</li>
      <li>
        <router-link to="/course"><b class="iconfont icon-tubiao1shuxiaoshuo big"></b>课程</router-link>
			</li>
      <li>
        <router-link to="/study"><b class="iconfont icon-fanhuijiuban"></b>学习中心</router-link>
			</li>
      <li>
        <router-link to="/my"><b class="iconfont icon-wode"></b>我的</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
  import '../assets/css/fonts.css'
  import '../assets/iconfont/iconfont.js'
  import {mapState, mapMutations, mapActions} from 'vuex'

	export default {
		data() {
			return {

			}
		},
    methods: {
      // 映射Actions中的handlerScroll方法
      ...mapActions([
        'handlerScroll'
      ])
    },
	}
</script>
<style lang="scss" scoped>
 @import '../assets/iconfont/iconfont.css';
  a:hover {
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
  .nav {
    width: 100%;
    height: .5rem;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
    box-shadow: 0 2px 10px #e0e0e0;
    ul {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        a {
          color: #9DA2A8;
          display: inline-block;
          font-size: .12rem;
          b {
            display: block;
            font-size: .22rem;
            margin-top: .05rem;
            margin-bottom: .02rem;
          }
        }
        a.active {
          color: #72D9BA;
        }
      }
    }
  }
</style>
