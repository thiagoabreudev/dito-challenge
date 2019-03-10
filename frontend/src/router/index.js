import Vue from 'vue'
import Router from 'vue-router'
import DitoAutocomplete from '@/pages/DitoAutocomplete'
import DitoTimeLine from '@/pages/DitoTimeLine'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "autocomplete"
    }, 
    {
      path: '/autocomplete', 
      name: 'autocomplete', 
      component: DitoAutocomplete
    },
    {
      path: '/timeline', 
      name: 'timeline', 
      component: DitoTimeLine
    }
  ]
})

export default router
