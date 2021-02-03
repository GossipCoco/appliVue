import Router from 'vue-router'
import MainContain from '@/components/MainContain'
import Login from '@/components/Secure/Login'
import RegisterUser from '@/components/Secure/RegisterUser'

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'MainContain',
      component: MainContain
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registerUser',
      name: 'RegisterUser',
      component: RegisterUser
    }
  ]
})
