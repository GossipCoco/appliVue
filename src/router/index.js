import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContain from '@/components/MainContain'
import Login from '@/components/Secure/Login'
import RegisterUser from '@/components/Secure/RegisterUser'
import UserList from '@/components/Users/UsersList'
import AllCharacters from '@/components/characters/AllCharacters'
import CharacterDetails from '@/components/characters/CharacterDetails'
import CreateACharacter from '@/components/characters/CreateACharacter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainContain
},
  {
      path: '/home',
      name: 'Home',
      component: MainContain
  },{
    path: '/login',
    name: 'Login',
    component : Login
  },{
    path: '/register',
    name: 'Register',
    component : RegisterUser
  },{
    path: '/allusers',
    name: 'AllUser',
    component : UserList
  },{
    path: '/characters/allcharacters',
    name: 'AllCharacters',
    component : AllCharacters
  },{
    path: '/characters/createacharacter',
    name: 'CreateACharacter',
    component : CreateACharacter
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

