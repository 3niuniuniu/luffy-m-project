import axios from 'axios'
import * as types from './mutation-types.js'

/* 异步操作 */
export default {
	getItemList({commit,state}, data){
		commit(types.ITEM_BUYLIST, data);
  },
}

