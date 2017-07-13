// 页面的查询参数

const state = {
	userId: "",
	pageId: "",
	_id: "",
}

const mutations = {
	setUserId(state, payload = "") {
		state.userId = payload;
	},
	setPageId(state, payload = "") {
		state.pageId = payload;
	},
	setProcessId(state, payload = "") {
		state._id = payload;
	},
	setQueryId(state,{userId = "", pageId = "", _id = ""}){
		state.userId = userId;
		state.pageId = pageId;
		state._id = _id;
	}
}

export default {
  state,
  mutations
}