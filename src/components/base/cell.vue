<template>
<group>
	<Cell :title="temp.label" :value="myData" style="text-align:left"></Cell>
</group>
</template>

<script>
	import {Cell, Group} from "vux"
	import mixin from "@/assets/js/mixins"
	export default {
		mixins: [mixin],
		components:{
			Cell,
			Group
		}
	}
</script>

<style>
	
	
	
</style>