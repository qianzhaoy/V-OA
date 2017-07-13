<template>
	<div>username</div>
</template>

<script>
	import {
		Group
	}
	from 'vux'

	export default {
		props:["node"],
		data() {
			return {
				step1: 1
			}
		},
		created(){
			console.log(this.node);
		},
		components: {
			Group
		}
	}

</script>

<style lang="less" scoped>

</style>
