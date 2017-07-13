// 页面组件的所有数据放这

const state = {}

const mutations = {
	setData(state, payload) {
		for (let key in payload) {
			state[key] = payload[key]
		}
	},
	updateData(state, payload) {
		state[payload.target].value = payload.value
	}
}

export default {
  state,
  mutations
}