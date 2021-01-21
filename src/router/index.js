import Vue from 'vue'
import Router from 'vue-router'
import MainContain from '@/components/MainContain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContain',
      component: MainContain
    }
  ]
})
