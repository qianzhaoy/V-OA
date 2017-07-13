import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['../views/home.vue'], resolve);
const Search = resolve => require(['../views/search.vue'], resolve);

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name:'home',
			component: Home,
			meta: {
				pageTitle: '主页'
			}
    },
		{
			path: '/search',
			name: 'search',
			component: Search,
			meta: {
				pageTitle: '登录'
			}
    }
  ]
})
