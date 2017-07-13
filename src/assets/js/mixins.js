// 这里可以把一些相同的Vue配置放一起.

export default {
	props: {
		temp: {
			type: Object,
			default() {
				return {}
			}
		},
		parent:{
			type: Object,
			default(){
				return this.$store.state.data
			}
		}
	},
	computed: {
		myData: {
			get() {
				return this.parent[this.temp.fieldId].value
			},
			set(val) {
				let target = this.temp.fieldId
				this.$store.commit('updateData', {
					target: target,
					value: val
				})
			}
		}
	},
}
