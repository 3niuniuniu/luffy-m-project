import {
  GET_ITEMBUY,
  GET_VALIDPERIODLD,
  GET_COURSEID,
  GET_USERINFO
} from './mutation-types.js'

export default {
  [GET_ITEMBUY] (state, data) {
    state.get_itembuy = data
    state.get_allcoupons = data.couponList.data
    state.session_key = data.sessionKey
    for (var i in data.buyData.data) {
      state.get_name = data.buyData.data[i].courseName
      state.get_coupons = data.buyData.data[i].courseCouponList.coupons
      for (var n in data.buyData.data[i].courseCouponList.coupons) {
        if (data.buyData.data[i].courseCouponList.coupons[n].default) {
          var couponNumber = data.buyData.data[i].courseCouponList.coupons[n].couponNumber
          state.default_number = couponNumber
        }
      }
      state.get_num = data.buyData.data[i].courseCouponList.total
    }
  },
  [GET_VALIDPERIODLD] (state, num) {
    state.valid_periodid = num
  },
  [GET_COURSEID] (state, id) {
    state.course_id = id
  },
  [GET_USERINFO] (state, user_info, time) {
    Object.assign(state.user_info, user_info)
  }
}
