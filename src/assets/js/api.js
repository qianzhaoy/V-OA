import Qs from 'qs'
import Axios from 'axios'

// 请求的全局配置
Axios.defaults.baseURL = 'http://192.168.82.33:8090/procedureDemo3/';

//安全拦截器
Axios.interceptors.request.use(function (config) {
	if (!config.headers.sessiontoken) {
		config.headers.sessiontoken = localStorage.getItem('sessiontoken') || '';
	}
	return config;
}, function (err) {
	return Promise.reject(err);
});

Axios.interceptors.response.use(function (response) {
	var contentType = response.headers['content-type'];
	if (!!contentType) {
		contentType.split(';').forEach(item => {
			var s = item.trim().split('=');
			if (s.length == 2 && s[0].trim() == 'sessiontoken') {
				localStorage.setItem('sessiontoken', s[1].trim());
				return false;
			}
		})
	}
	return response;
}, function (err) {
	return Promise.reject(err);
});


////POST传参序列化
//Axios.interceptors.request.use((config) => {
//	if (config.method === 'post') {
//		config.data = Qs.stringify(config.data);
//		console.log(config.data);
//	}
//	return config;
//}, (error) => {
//	throw new Error("错误传参")
//});

//ajax成功回调验证
Axios.interceptors.response.use(function (res) {
	if (!res.data.procedures) {
		//这里直接执行axios的catch方法, catch用于执行流程报错
		return Promise.reject(res);
	}
	return res;
}, function (error) {
	// 这里在网络问题或者后端报错的情况下执行, 而不在catch中执行了.
	throw new Error("网络出错")
	//	return Promise.reject(error);
});

export default {
	getNodeTemp(params) {
		const url = "u/1011/read"
		return Axios.post(url, params)

		//		const url = '/static/data/temp.json'
		//		return Axios.get(url)
	},

	//	getData(params) {
	//		const url = "r/1010/demo3/Get"
	//		return Axios.post(url, params)

	//		const url = "/static/data/data.json"
	//		return Axios.get(url)
	//	},

	//	doProcess(params) {
	//		const url = "r/1010/demo3/Submit"
	//		return Axios.post(url, params)
	//	},

	custom(url, params) {
		return Axios.post(url, params)
	}
}
