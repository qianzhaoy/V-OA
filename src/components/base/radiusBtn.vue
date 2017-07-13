<template>
	<group>
		<div class="radiusBtn" @click="radiusClick($event)">
			<span>{{temp.value}}</span>
		</div>
	</group>
</template>

<script>
	import {
		Group
	} from 'vux'

	export default {
		mixins:[mixin],
		data() {
			return {
				count: 0
			}
		},
		methods: {
			radiusClick(event) {
				if (this.temp.server.event) {
					this.count++
					this.$store.commit('updateData', {
						target: this.temp.server.temptTarget,
						value: this.count
					})
				}
			}
		},
		components: {
			Group,
		}
	}

</script>


<style scoped lang="less">
	@diameter: 150px;
	.radiusBtn {
		padding-top: 10px;
		padding-bottom: 5px;
		width: @diameter;
		height: @diameter;
		position: relative;
		display: inline-block;
		background-color: #01ccc4;
		border-radius: 50%;
		color: #fff;
		font-size: 20px;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		box-sizing: border-box;
		span {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

</style>
