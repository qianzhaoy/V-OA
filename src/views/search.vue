<template>
    <div class="node">
    <input type="text" v-model="addType">
			<router-link :to="{ name: 'home' }"><button>home</button></router-link>
    </div>
</template>

<script>
	//这个页面暂时用来做组件数据的添加, 如果有一个组件需要跳转到另外一个页面去添加数据, 然后在返回,把数据填进去. 就这么做
	export default {
		data() {
			return {
				addType: "",
				target: ""
			}
		},
		beforeRouteEnter(to, from, next) {
			// 进页面后获取需要修改的数据的元素ID
			next(vm => {
				vm.target = vm.$route.query.target
			})
		},
		beforeRouteLeave(to, from, next) {
			if (this.addType.trim() === "") {
				next();
				return;
			}
			
			const data = this.targetData;
			
			//修改主页内对应数据
			this.targetData = Array.isArray(data) ? this.push(data, this.addType) : this.addType;
			
			//重置输入框
			this.addType = "";
			next();
		},
		methods: {
			push(arr, item) {
				let newArr = arr;
				newArr.push(item)
				return newArr
			}
		},
		computed: {
			targetData: {
				get() {
					return this.$store.state.data[this.target].value
				},
				set(val) {
					this.$store.commit('updateData', {
						target: this.target,
						value: val
					})
				}
			},
		}
	}

</script>

<style scoped>


</style>
