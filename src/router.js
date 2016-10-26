import Vue from 'vue'
import Router from 'vue-router'

import bgFilter from './components/BgFilter.vue'
import bobRoss from './components/BobRoss.vue'

Vue.use(Router)
const componentsList = [bgFilter, bobRoss];

let router =  new Router({
	mode: 'hash',
	routes: [
		{
			path: '/',
			component: componentsList[Math.floor(Math.random() * componentsList.length)]
		},
		{
			path: '/bobross',
			component: bobRoss
		},
		{
			path: '/bgfilter',
			component: bgFilter
		}
	],

});


export default router;
