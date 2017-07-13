<template>
	<group class="approve">
			<h2>审批人</h2>
			<Flexbox wrap="wrap" :gutter="0" class="item">
				<FlexboxItem :span="1/4" v-for="(item, index) in approvePeople"  :key="index">
					<div :class="item.status">{{item.username}}</div>
					<div v-if="lastItem !== index">
						<x-icon type="ios-arrow-thin-right" size="30" ></x-icon>
					</div>
				</FlexboxItem>
			</Flexbox>
	</group>
</template>

<script>
	import {
		Group,
		Flexbox,
		FlexboxItem
	}
	from 'vux'

	import mixin from "@/assets/js/mixins"

	export default {
		mixins: [mixin],
		data() {
			return {
				people: [],
			}
		},
		created() {
			this.getApprove()
		},
		methods: {
			getApprove() {
				//流程内的方法, 固定的
				this.$api.custom("person/1010/demo3/read").then(res => {
					this.people = res.data.procedures;
				})
			}
		},
		components: {
			Group,
			Flexbox,
			FlexboxItem,
		},
		computed: {
			approvePeople() {
				const vm = this;
				return vm.people.map(user => {
					const has = vm.myData.indexOf(user.userid);
					console.log(has);
					if (has != -1) {
						user.status = "success"
					}
					return user
				})
			},
			lastItem() {
				return this.people.length - 1
			},
		}
	}

</script>

<style lang="less" scoped>
	.approve {
		text-align: left;
		.item {
			font-size: 12px;
			margin: 20px 0;
			padding-left: 15px;
			>div {
				overflow: hidden;
				position: relative;
			}
			.success {
				color: dodgerblue
			}
			svg {
				position: absolute;
				top: 50%;
				left: 70%;
				transform: translate(-50%, -50%)
			}
		}
	}

</style>
