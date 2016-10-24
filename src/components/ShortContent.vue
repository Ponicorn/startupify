<template>
	<div>
		 {{adjective}} {{subject}}
	</div>

</template>

<script>
import data from '../data.js'

export default {
  	data () {
	    return {
			subject : data.subject(),
			adjective : data.adjective()
		}
	},
	name: 'activitySince'
}
</script>

<style scoped lang="scss">

</style>
