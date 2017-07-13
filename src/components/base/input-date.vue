<template>

	<group labelAlign="left">
			<datetime format="YYYY-MM-DD HH:mm" :placeholder="placeholderRequire" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" :title="value.label" confirm-text="完成" cancel-text="取消" v-model="myData.value"></datetime>
		</group>

</template>

<script>
	import {
		Datetime,
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
			Datetime,
			Group
		}
	}
</script>

<style>

</style>