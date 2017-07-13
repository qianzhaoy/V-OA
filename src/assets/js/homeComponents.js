const base = {
	InputText: (resolve) => {
		//异步组件写法
		require(['@/components/base/input-text.vue'], resolve)
	},
	TableView: (resolve) => {
		require(['@/components/base/tableView.vue'], resolve)
	},
	
	LabelView:(resolve) => {
		require(['@/components/base/labelView.vue'], resolve)
	},

	SelectorL: (resolve) => {
		require(['@/components/base/Select.vue'], resolve)
	},

	InputDate: (resolve) => {
		require(['@/components/base/input-date.vue'], resolve)
	},

	Ltextarea: (resolve) => {
		require(['@/components/base/Ltextarea.vue'], resolve)
	},

	TowTime: (resolve) => {
		require(['@/components/base/twotime.vue'], resolve)
	},

	Calculate: (resolve) => {
		require(['@/components/base/calculate.vue'], resolve)
	},
	
	Upload: (resolve) => {
		require(['@/components/base/upload.vue'], resolve)
	},
	
	RouterChange: (resolve) => {
		require(['@/components/base/routerChange.vue'], resolve)
	},
	
	RadiusBtn: (resolve) => {
		require(['@/components/base/radiusBtn.vue'], resolve)
	},
	
	Cell: (resolve) => {
		require(['@/components/base/cell.vue'], resolve)
	},
}

const process = {
	Approve: (resolve) => {
		require(['@/components/process/approve.vue'], resolve)
	},
	
	Vote: (resolve) => {
		require(['@/components/process/vote.vue'], resolve)
	},
	
	Submit: (resolve) => {
		require(['@/components/process/submit.vue'], resolve)
	},
}


export default Object.assign({}, base, process)
