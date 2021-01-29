import Vue from 'vue'
import Router from 'vue-router'
import MainContain from '@/components/MainContain'
import LoginContain from '@/components/Secure/LoginContain'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
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
