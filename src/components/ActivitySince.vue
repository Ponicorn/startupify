<template>
	<div>
		<div>{{city}} {{adjective}} {{activity}}</div>
		<div class="subtitle">since {{year}}</div>
	</div>
</template>

<script>
import data from '../data.js'

export default {
  	data () {
	    return {
			city : data.city(),
			activity : data.activity(),
			adjective : data.adjective(),
			year : data.year(),
		}
	},
	name: 'activitySince'
}
</script>

<style scoped lang="scss">
	.subtitle {
		font-size: 0.6em;
		font-weight: normal;
	}
</style>
