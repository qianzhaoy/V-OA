<template>

	<group labelAlign="left">
		<x-input :title="temp.label" :placeholder="temp.attrs.placeholder" :debounce=200 :show-clear="true" v-model="myData" :required="temp.attrs.require"></x-input>
	</group>

</template>

<script>
	import {
		XInput,
		Group
	}
	from 'vux'
	
	import mixin from "@/assets/js/mixins"

	export default {
		mixins:[mixin],
		components: {
			XInput,
			Group
		}
	}

</script>

<style>


</style>
