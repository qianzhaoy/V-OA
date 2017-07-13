<template>
	<div id="vote">
		<h1>总票数{{count}}票</h1>
		<Run 
			v-for="node in temp.childrens" 
			:temp="node" 
			:key="node.fieldId" 
			@click.native="byVote(node.fieldId)"
			:parent="myData"
		/>
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations
	}
	from 'vuex'

	import Run from '@/components/run.vue'
	import mixin from "@/assets/js/mixins"

	export default {
		mixins: [mixin],
		data() {
			return {
				count: 0
			}
		},
		created() {
			this.setElement();
			this.getData().then(res => {
				this.setData(res.data)
			});
		},
		methods: {
			byVote(fieldId) {
				const url = 'r/1011/demo2/Submit',
					_id = this.query._id,
					userId = this.query.userId,
					success = this.setData,
					params = {
						_id,userId,fieldId
					}
				
				 this.$store.dispatch("voteSubmit",{url, params, success})

			},
			setElement() {
				const self = this;
				const elements = self.temp.childrens
				elements.forEach(element => {
					if (typeof element.fieldId != "undefined") {
						let voteValue = self.data[self.temp.fieldId].value;

						//增加default字段判断该组件的默认值是什么数据类型的, 并在Vue里初始化model
						self.$set(voteValue, element.fieldId, {
							value: "0票"
						})
					}
				})
			},

			getData() {
				const serverAPI = this.$api,
					query = this.query,
					params = {
						userId: query.userId,
						pageId: query.pageId,
						_id: query._id
					};

				return serverAPI.custom("r/1011/demo2/Get", params)
			},

			setData(resData) {
				const procedures = resData.procedures;
				typeof procedures._id !== "undefined" && this.setProcessId(procedures._id);

				this.count = procedures.max || this.count;

				const data = procedures.data.vote.value;
				for (let prop in data) {
					data[prop].value += "票";
				}
				this.data.vote.value && Object.assign(this.data.vote.value, data);
			},
			...mapMutations(["setProcessId"]),
		},
		computed: {
			...mapState({
				data: state => state.data,
				query: state => state.query,
			})
		},
		components: {
			Run
		}
	}

</script>

<style lang="less" scoped>
	#vote {
		>h1 {
			font-size: 20px;
			border-radius: 8px;
			background-color: aqua;
			width: 80%;
			margin: 0 auto;
		}
	}

</style>
