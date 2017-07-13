<template>
	<group>
		<div class="content">
			{{myData}}
		</div>
	</group>
</template>

<script>
	import {
		Group,
		Cell
	}
	from 'vux'
	import mixin from "@/assets/js/mixins"
	
	export default {
		mixins:[mixin],
		components: {
			Group,
			Cell,
		}
	}

</script>

<style scoped>
	.content{
		line-height: 2em;
		width: 80%;
		margin: 0 auto;
		border-radius: 5px;
	}
</style>
