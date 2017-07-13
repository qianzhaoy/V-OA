<template>

	<group labelAlign="left">
		<selector :title="temp.label" :options="options" direction="rtl" v-model="myData.value" @on-change="getBack($event)"></selector>
	</group>

</template>

<script>
	import {
		Selector,
		Group
	}
	from 'vux'

	import {
		options
	}
	from '@/assets/js/public'


	export default {
		mixins:[mixin],
		computed: {
			options
		},
		create(){
		},
		methods: {
			getBack(newValue) {
				let tempTarget = this.temp.server.temptTarget
				if(this.temp.server.event){
					this.$store.commit('updateData',{
						target: tempTarget,
						value: newValue
					})
				}
			}
		},
		components: {
			Selector,
			Group
		}
	}

</script>

<style>


</style>
