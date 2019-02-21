import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from './getters'
const store = new Vuex.Store({
  getters
})

export default store