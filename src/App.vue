<template>
	<div id="app">
		<div v-transfer-dom>
			<loading v-model="loading.isShow" :text='loading.text'></loading>
		</div>
		<toast v-model="toast.isShow" is-show-mask :type="toast.type">{{	toast.text }}</toast>
		<router-link :to="{ name: 'search'}">search</router-link>
		<router-link :to="{ name: 'home'}">home</router-link>
		<transition name="fade">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	import {
		mapState
	}
	from 'vuex'

	import {
		Loading,
		TransferDomDirective as TransferDom,
		Toast
	} from 'vux'

	export default {
		directives: {
			TransferDom
		},
		name: 'app',
		data() {
			return {}
		},
		created() {
			//先取到链接上的查询对象,以备后面使用
			this.setQueryId()
		},
		watch: {
			// 如果路由有变化，会再次执行该方法
			//			'$route': 'fetchData'
		},
		computed: {
			...mapState({
				loading: state => state.vux.loading,
				toast: state => state.vux.toast,
			}),

		},
		components: {
			Loading,
			Toast
		},
		methods: {
			GetQueryString(name) {
				//查询字符串和路由的参数传递不一样,这里的search改动会刷新页面. 路由?后面的参数不会刷新,所以从其他页面进来的话,查询参数放链接上而不是路由上.
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]);
				return "";
			},
			setQueryId() {
				const userId = this.GetQueryString('userId')
				const pageId = this.GetQueryString('pageId')
				const _id = this.GetQueryString('_id')

				this.$store.commit('setQueryId', {
					userId,
					pageId,
					_id,
				})
			},
		}
	}

</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	/*
	@import '~vux/src/styles/1px.less';
	@import '~vux/src/styles/tap.less';
*/
	
	body {
		background-color: #f3f5f8
	}
	
	#app {
		text-align: center;
		font-size: 12px;
	}
	
	[v-cloak] {
		display: none;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-leave-active {
		display: none
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
	
	div {
		word-break: break-all
	}

</style>
