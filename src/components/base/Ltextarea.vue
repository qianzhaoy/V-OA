<template>

	<group :title="temp.label">
			<x-textarea :max="20" :placeholder="temp.placeholder" v-model="myData.value"></x-textarea>
		</group>

</template>

<script>
	import {
		XTextarea,
		Group
	}
	from 'vux'

	import {
		placeholderRequire
	}
	from '@/assets/js/public'


	export default {
		mixins: [mixin],
		computed: {
			placeholderRequire
		},
		components: {
			XTextarea,
			Group
		}
	}
</script>

<style>

</style>