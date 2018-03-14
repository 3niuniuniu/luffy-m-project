import {
  GET_ITEMBUY,
  GET_VALIDPERIODLD,
  GET_COURSEID
} from './mutation-types.js'

export default {
  [GET_ITEMBUY] (state, data) {
    state.get_itembuy = data
    state.get_allcoupons = data.couponList.data
    state.session_key = data.sessionKey
    for (var i in data.buyData.data) {
      state.get_name = data.buyData.data[i].courseName
      state.get_coupons = data.buyData.data[i].courseCouponList.coupons
      state.get_num = data.buyData.data[i].courseCouponList.total
    }
  },
  [GET_VALIDPERIODLD] (state, num) {
    state.valid_periodid = num
  },
  [GET_COURSEID] (state, id) {
    state.course_id = id
  }
}
