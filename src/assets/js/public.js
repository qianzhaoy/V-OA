// 公用函数, 工具类把.现在好像还没用到
function placeholderRequire() {
	return this.value.require ? `${this.value.placeholder}(必填)` : this.value.placeholder
}

function options() {
	return this.value.options ? this.value.options.map((item, index) => {
		return {
			key: index,
			value: item
		}
	}) : null
}

export {
	placeholderRequire, options
}