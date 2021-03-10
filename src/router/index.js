import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContain from '@/components/MainContain'
import Accueil from '@/components/Accueil'
import Login from '@/components/Secure/Login'
import RegisterUser from '@/components/Secure/RegisterUser'
import UserList from '@/components/Users/UsersList'
import UserProfil from '@/components/Users/UserProfil'
import CharacterDetails from '@/components/characters/CharacterDetails'
import CreateACharacter from '@/components/characters/CreateACharacter'
import AllClans from '@/components/clans/AllClans'
import CreditContainer from '@/components/layout/CreditContainer'
import PanelAdmin from '@/components/admin/PanelAdmin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },{
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
    path: '/user/allusers',
    name: 'AllUser',
    component : UserList
  },{
    path: '/user/userProfil/:id',
    name: 'userProfil',
    component: UserProfil,
    props: true
  },{
    path: '/characters/allcharacters',
    name: 'AllCharacters',
    component : MainContain
  },{
    path: '/characters/characterDetails/:idCharacter',
    name: "characterDetails",
    component : CharacterDetails,
    props: true
  },{
    path: '/characters/createacharacter',
    name: 'CreateACharacter',
    component : CreateACharacter
  },{
    path: '/clan/allclans',
    name: 'AllClans',
    component : AllClans
  },{
    path: '/credit',
    name: 'CreditContainer',
    component: CreditContainer
  },{
    path: '/panel-admin',
    name: 'PanelAdmin',
    component: PanelAdmin
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

