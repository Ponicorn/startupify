import Vue from 'vue'
import Router from 'vue-router'
import Basic from '@/components/Basic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Basic',
      component: Basic
    }
  ]
})
