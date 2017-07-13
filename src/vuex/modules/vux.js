//vux的组件状态放这, 比如loading, 还有弹出框他们的显示隐藏还有显示文本.

const state = {
	loading:{
		isShow: false,
		text: '加载中'
	},
	toast:{
		isShow: false,
		text: "",
		type: "success"
	}
}

const mutations = {
	toggleLoading(state, loadingText = state.loadingText ) {
		state.loading.isShow = !state.loading.isShow
		state.loading.text = loadingText
	},
	toggleToast(state, {text = "", type = "success"} ) {
		state.toast.isShow = !state.toast.isShow
		state.toast.text = text
		state.toast.type = type
	},
}

export default {
  state,
  mutations
}