<template>

	<group>
		<cell :title="temp.label" primary="content" @click.native="onClick">
			<input type="file" accept="image/*" capture="camera" class="file" @change="change">
			<img src="../../assets/images/logo.png" class="rightImg">
		</cell>
  	<flexbox wrap="wrap" :gutter="0">
				<flexbox-item :span="1/3" v-for="(item, index) in list" :key="'uploadImag'+index">
					<div class="flexBoxDIV">

						<span class="badgeSpan" @click.stop="deleteImage(index)">
							<badge text="X"></badge>
						</span>

						<img class="previewer-img" :src="item.src" width="100%" @click="show(index)">
					</div>
				</flexbox-item>
			</flexbox>
    	<previewer :list="list" ref="previewer" :options="options"></previewer>
	</group>

</template>

<script>
	import {
		Cell,
		Previewer,
		Flexbox,
		FlexboxItem,
		Badge,
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
				list: [],
				options: {
					getThumbBoundsFn(index) {
						// find thumbnail element
						let thumbnail = document.querySelectorAll('.previewer-img')[index]
						// get window scroll Y
						let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
						// optionally get horizontal scroll
						// get position of element relative to viewport
						let rect = thumbnail.getBoundingClientRect()
						// w = width
						return {
							x: rect.left,
							y: rect.top + pageYScroll,
							w: rect.width
						}
						// Good guide on how to get element coordinates:
						// http://javascript.info/tutorial/coordinates
					}
				}
			}
		},
		computed: {
			placeholderRequire
		},
		methods: {
			show(index) {
				this.$refs.previewer.show(index)
			},

			onClick(event) {},

			change(event) {
				const self = this
				const file = event.target.files[0]
				if(typeof file === "undefined"){return false}
				
				self.$store.commit('updateLoading', {
					isLoading: true,
					loadingText: "上传中"
				})
				
				setTimeout(function() {
					let src = self.getObjectURL(file)

					self.getImageInfo(src).then((obj) => {
						self.list.push(obj)
						self.myData.value.push('http://www.sdjskd/com')

						self.$store.commit('updateLoading', {
							isLoading: false
						})
					}, (err) => {
						self.$store.commit('updateLoading', {
							isLoading: false
						})
						console.log(err);
					})
				}, 1000);
				
			},

			getImageInfo(src) {
				return new Promise((resolve, reject) => {
					let imgs = new Image()
					imgs.src = src

					imgs.onload = function() {
						resolve({
							w: imgs.width,
							h: imgs.height,
							src: src
						})
						imgs = null
					}

					imgs.onerror = function() {
						reject("文件加载失败")
						imgs = null
					}
				})
			},

			deleteImage(index) {
				this.list.splice(index, 1)
				this.myData.value.splice(index, 1)
			},

			getObjectURL(file) {
				var url = null;
				if (window.createObjectURL != undefined) { // basic
					url = window.createObjectURL(file);
				} else if (window.URL != undefined) { // mozilla(firefox)
					url = window.URL.createObjectURL(file);
				} else if (window.webkitURL != undefined) { // webkit or chrome
					url = window.webkitURL.createObjectURL(file);
				}
				return url;
			}
		},
		components: {
			Cell,
			Previewer,
			Badge,
			Flexbox,
			FlexboxItem,
			Group
		}
	}

</script>

<style lang="less">
	.flexBoxDIV{
		padding:2px;
		position: relative;
		
		span.badgeSpan{
			position: absolute;
			right: 2px;
			top: 0;
			line-height:0 !important
		}
	}
	
	.previewer-img {
		display: block;
		border: none
	}
	
	.file {
		position: absolute;
		right: 0;
		height: 100%;
		opacity: 0
	}
	
	.rightImg {
		width: 20px;
		vertical-align: middle
	}

</style>
