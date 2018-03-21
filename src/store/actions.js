import axios from 'axios'
import * as types from './mutation-types.js'

/* 异步操作 */
export default {
	userInfo({commit,state}, user_info){
    commit(types.GET_USERINFO, user_info)
  },
}

