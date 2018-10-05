import Vue from 'vue'
import Router from 'vue-router'
import Startup from './views/Startup.vue'
import Bobross from './views/Bobross.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'startup',
      component: Startup
    },
    {
      path: '/bobross',
      name: 'bobross',
      component: Bobross
    }
  ]
})
