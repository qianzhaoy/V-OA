<template>

	<group>
	  <cell-box is-link :link="{ name: 'search', query: query }">
      {{temp.label}}
    </cell-box>
	</group>

</template>

<script>
	import {
		CellBox,
		Group
	}
	from 'vux'


	export default {
		mixins:[mixin],
		data() {
			return {
				query: Object
			}
		},
		created() {
			this.query = this.$route.query
			this.query.target = this.temp.fieldId
		},
		computed: {},
		components: {
			Group,
			CellBox
		}
	}

</script>

<style>


</style>
