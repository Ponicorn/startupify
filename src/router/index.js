import Vue from 'vue'
import Router from 'vue-router'
import Basic from '@/components/Basic'
import Arrow from '@/components/Arrow'
import Ross from '@/components/Ross'
import Rng from '@/components/Rng'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Basic
    },
    {
      path: '/basic',
      name: 'Basic',
      component: Basic
    },
    {
      path: '/ross',
      name: 'Ross',
      component: Ross
    },
    {
      path: '/arrow',
      name: 'Arrow',
      component: Arrow
    },
    {
      path: '/rng',
      name: 'Rng',
      component: Rng
    }
  ]
})
