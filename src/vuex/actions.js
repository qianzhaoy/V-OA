import $api from "@/assets/js/api"

const failFn = (commit, res) => {
	let executed = res.data.executed;
	commit("toggleLoading")
	executed[0] === 'fail' && commit("toggleToast",{
		text: executed[2],
		type: "cancel"
	})
}


//把异步的方法有涉及到频繁$store.commit的地方, 放在actions里. commit不能用异步的方法.
export const voteSubmit = ({ commit }, {url, params, success}) => {
		commit("toggleLoading", "投票中...")
		$api.custom(url, params).then(res => {
				commit("toggleLoading")
				success && success(res.data)
			}).catch(res => {
				failFn(commit, res)
			})
}


export const submit = ({ commit }, {url, params, success}) => {
		commit("toggleLoading", "提交中...")
		$api.custom(url, params).then(res => {
				commit("toggleLoading")
				commit("toggleToast", "提交成功")
				success && success(res.data)
			}).catch(res => {
				failFn(commit, res)
			})
}