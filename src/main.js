import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueLazyLoad from 'vue-lazyload'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import './assets/js/rem'

//懒加载的默认图片
import def_lazy_img from './assets/img/pageimgs/loading.gif'

Vue.use(VueResource)

//使用懒加载组件
Vue.use(VueLazyLoad,{
	loading: def_lazy_img
})

Vue.config.productionTip = false

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
