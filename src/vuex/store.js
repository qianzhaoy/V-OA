import Vue from 'vue'
import Vuex from 'vuex'

import vux from './modules/vux'
import query from './modules/query'
import data from './modules/data'

import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	modules: {
		vux,
		data,
		query
	}
})
