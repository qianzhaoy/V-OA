<template>

	<group labelAlign="left">
		<datetime format="YYYY-MM-DD HH:mm" :placeholder="placeholderRequire" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" title="开始时间" confirm-text="完成" cancel-text="取消" v-model="myData[0]" @on-change="startChange(myData[1],$event)"></datetime>

		<datetime format="YYYY-MM-DD HH:mm" :placeholder="placeholderRequire" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" title="结束时间" confirm-text="完成" cancel-text="取消" :startDate="myData[0]" end-date="2030-12-31" :min-hour="minHour" :max-hour="maxHour" v-model="myData[1]" @on-change="endChange(myData[1],$event)"></datetime>
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
		mixins:[mixin],
		data() {
			return {
				maxHour: 23
			}
		},
		computed: {
			placeholderRequire,
			minHour() {
				return new Date(this.myData[0]).getHours()
			}
		},
		components: {
			Datetime,
			Group
		},
		methods: {
			getTime(date) {
				return new Date(date).getTime()
			},

			startChange(oldValue, newValue) {
				if (this.getTime(newValue) > this.getTime(this.myData[1])) {
					this.myData[1] = newValue
				}
			},

			endChange(oldValue, newValue) {
				if (this.getTime(newValue) < this.getTime(this.myData[0])) {
					this.myData[0] = newValue
				}
			}
		}
	}

</script>

<style>


</style>
