// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
const FastClick = require('fastclick')
FastClick.attach(document.body)

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import api from '@/assets/js/api' //后端方法放这了
import '@/assets/css/reset.css' // css重置或者全局css在这

//axios的Promise异步请求需要兼容低版本浏览器的话, 需要polyfill. 得先install
//require('es6-promise').polyfill()

Vue.prototype.$api = api


router.beforeEach(function (to, form, next) {
	store.commit('toggleLoading', "加载中...")
	setTimeout(function () {
		//为了让路由切换更加明显, 实际使用可以去掉setTimeout
		next()
	}, 500);
})

router.afterEach(function (to) {
	store.commit('toggleLoading')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})