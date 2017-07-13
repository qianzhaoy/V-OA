<template>

	<group labelAlign="left" label-margin-right="1em">
		<x-number align="left" :title="temp.label" :min="0" v-model="myData.value[0]" fillable @on-change="change"></x-number>
		
		<x-input :title="temp.AssLabel" :show-clear="true" v-model="myData.value[1]" readonly></x-input>
	</group>

</template>

<script>
	import {
		XInput,
		XNumber,
		Group
	}
	from 'vux'

	export default {
		mixins: [mixin],
		components: {
			XInput,
			XNumber,
			Group
		},
		methods: {
			change(num) {
				try {
					let sum = eval(this.temp.calculate)
					this.myData.value[1] = sum
				} catch (ex) {
					this.$vux.toast.show({
						text: '计算公式错误',
						type: 'warn',
						time:1000
					})
				}
			}
		}
	}

</script>

<style>


</style>
