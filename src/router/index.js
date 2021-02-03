import Router from 'vue-router'
import MainContain from '@/components/MainContain'
import Login from '@/components/Secure/Login'
import RegisterContain from '@/components/Secure/RegisterContain'

export default new Router({
  routes: [
    {
      path: 'home',
      name: 'MainContain',
      component: MainContain
    },
    {
      path: 'login',
      name: 'Login',
      component: Login
    },
    {
      path: 'register',
      name: 'RegisterContain',
      component: RegisterContain
    }
  ]
})
