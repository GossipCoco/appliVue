import Vue from 'vue'
import Router from 'vue-router'
import MainContain from '@/components/MainContain'
import LoginContain from '@/components/Secure/LoginContain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContain',
      component: MainContain
    },
    {
      path: '/login',
      name: 'LoginContain',
      component: LoginContain
    }
  ]
})
