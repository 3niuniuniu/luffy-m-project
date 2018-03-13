import {
  GET_ITEMBUY,
} from './mutation-types.js'


export default {
  [GET_ITEMBUY] (state, data) {
    Object.assign(state.get_itembuy, data)
    console.log(state.get_itembuy)
  }
}
