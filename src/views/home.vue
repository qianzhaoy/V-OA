<template>
	<div class="nodeList">
		<Run v-for="node in element" :temp="node" :key="node.fieldId" />
		{{data}}
		<br>
		<br>
		{{query}}
	</div>
</template>

<script>
	import {
		mapState
	}
	from 'vuex'
	
	import Run from '@/components/run.vue'

	export default {
		data() {
			return {
				element: [],
			}
		},
		created() {
			this.getAll()
		},
		methods: {
			getAll() {
				const vm = this;
				const query = vm.query,
					serverAPI = vm.$api,
					params = {
						userId: query.userId,
						pageId: query.pageId,
						_id: query._id
					};

				serverAPI.getNodeTemp(params).then(res => {
					//必须得先生成模板之后才能 setData. 不能乱, 否则Dom无法绑定数据
					vm.setElement(res)
					
					//初始化的下一步执行方法, 现在有没有用
					const step = res.data.procedures.step;
					step && step.Get && serverAPI.custom(step.Get, params).then(res => {
						vm.setData(res)
					});

				})
			},
			//生成模板
			setElement(resTemp, resData) {
				const elements = resTemp.data.procedures.element
				const self = this;
				
				elements.forEach( element => {
					if (typeof element.fieldId != "undefined") {
						//增加default字段判断该组件的默认值是什么数据类型的, 并在Vue里初始化数据模型
						self.$set(self.data, element.fieldId, {
							value: element.default
						})
					}
				})
				this.element = elements
			},

			setData(resData) {
				const procedures = resData.data.procedures,
							data = procedures.data;
				typeof procedures._id !== "undefined" && this.$store.commit('setProcessId', procedures._id);
				typeof data !== "undefined" && this.$store.commit('setData', data);
			}
		},
		computed: {
			...mapState({
				data: state => state.data,
				query: state => state.query,
			})
		},
		components:{
			Run
		}
	}

</script>

<style scoped>
	.nodeList {
		padding-bottom: 70px;
	}

</style>
