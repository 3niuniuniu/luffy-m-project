
<template>
	<div style="height: 100%;">
		<!-- index article cart mine -->
		<div id="app"
      class="z_app"
      :class="{'hideLeft':$route.path.split('/').length>2}">
      <keep-alive>
        <router-view
          name="default">
        </router-view>
      </keep-alive>
      <div class="z-foot">
        <nav-bar v-show="$route.meta.navShow"></nav-bar>
      </div>
    </div>
		<transition
			name="custom-classes-transition"
			:enter-active-class="enterAnimate"
			:leave-active-class="leaveAnimate">
			<keep-alive>
				<router-view
					name="subPage"
					class="router-view">
				</router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
  import NavBar from '../src/components/nav.vue'
  import {ViewBox, Loading} from 'vux'
  import Login from '../src/pages/login/Login.vue'

	export default {
    name: 'app',
    components: {
      NavBar,
      ViewBox,
      Loading,
      Login
    },
    data() {
      return {
        "enterAnimate": "", //页面进入动效
        "leaveAnimate": "" //页面离开动效
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        if(toDepth === 2) {
          // this.$store.commit('setPageName', to.name)
        }
        if(toDepth === fromDepth) {
          return
        }
        this.enterAnimate = toDepth > fromDepth
          ? 'animated fadeInRight'
          : 'animated fadeInLeft'

        this.leaveAnimate = toDepth > fromDepth
          ? 'animated fadeOutRight'
          : 'animated fadeOutLeft'

        // if(toDepth === 3) {
        // 	this.leaveAnimate = 'animated fadeOutRight'
        // }

      }
    },
    computed: {
      loading(){
        return this.$store.getters.loading
      }
    },
	}
</script>

<style>
html{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body{
  position: relative;
  height: 100%;
  overflow-x: hidden;
}
.z_app{
  transition: 0.3s;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #f3f5f7;
}
.hideLeft {
  opacity: 0.75;
  transform: translate3d(-100%, 0, 0);
  transition: .3s;
  overflow: hidden;
}
.router-view {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  /* z-index: 5; */
  background-color: #f3f5f7;
  overflow-y: scroll;
}
.animated {
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  /*animation: 0.25s linear;*/
}
@keyframes fadeInRight {
  from {
      opacity: 1;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
  }
  to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}


@keyframes fadeInLeft {
  from {
      opacity: 1;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
  }
  to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

@keyframes fadeOutLeft {
  from {
      opacity: 1;
  }
  to {
      opacity: 1;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
  }
}

.fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

@keyframes fadeOutRight {
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
  }
}

.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}
</style>



