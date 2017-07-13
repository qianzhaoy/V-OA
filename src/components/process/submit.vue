<template>
	<div class="buttomBtn">
		<x-button type="primary" @click.native="Submit">{{temp.label}}</x-button>
	</div>
</template>


<script>
	import {
		XButton
	} from 'vux'

	import {
		mapState
	} from 'vuex'

	export default {
		props: {
			temp: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		components: {
			XButton
		},
		methods: {
			Submit() {
				let params = {},
					temp = this.temp,
					query = this.query,
					url = temp.server.method;

				params.data = this.data;
				params.userId = query.userId || "";
				params.pageId = query.pageId || "";
				params._id = query._id || "";

				this.$store.dispatch("submit",{url, params});
			}
		},
		computed: {
			...mapState({
				data: state => state.data,
				query: state => state.query,
			})
		},
	}

</script>

<style scoped>
	div.buttomBtn {
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 999
	}

</style>
