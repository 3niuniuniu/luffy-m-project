import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex);

/* 项目全局State */
const state = {
  course_id: '',
  img_host: '//hcdn1.luffycity.com',
  get_itembuy: {},
  get_coupons: {},
  get_allcoupons: {},
  get_name: '',
  session_key: '',
  valid_periodid: '',
  get_num: '',
  coupon_number: '',
  order_number: '',
  available_coupon_num: '',
}

/* Store实例 */
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
