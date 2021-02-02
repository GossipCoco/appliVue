import Router from 'vue-router'
import MainContain from '@/components/MainContain'
import LoginContain from '@/components/Secure/LoginContain'
import RegisterContain from '@/components/Secure/RegisterContain'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'MainContain',
      component: MainContain
    },
    {
      path: '/login/',
      name: 'LoginContain',
      component: LoginContain
    },
    {
      path: '/register/',
      name: 'RegisterContain',
      component: RegisterContain
    }
  ]
})
