<script>
	//很重要的一个组件, 用render函数去创建标签, 而不是用v-if 去判断type,再去生成这个标签. 直接用type来对应这个标签
	import homeComponents from '@/assets/js/homeComponents'
	export default {
		render: function(cElement, context) {
			return cElement(homeComponents[this.temp.type], {
				props: {
					temp: this.temp,// 组件数据
					parent: this.parent,//因为有组件可能有两层, 在数据模型上需要用parent来标识父元素.默认最顶层.就是this.$store.state.data
				}
			})
		},
		props: {
			temp: {
				type: Object,
				required: true,
				default: {}
			},
			parent: {
				type: Object,
				default() {
					return this.$store.state.data
				}
			}
		}
	}
</script>
