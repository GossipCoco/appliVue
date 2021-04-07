import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '@/components/pages/Accueil'
import Login from '@/components/Secure/Login'
import RegisterUser from '@/components/Secure/RegisterUser'
import UserList from '@/components/Users/UsersList'
import UserProfil from '@/components/Users/UserProfil'
import AllCharacters from '@/components/characters/AllCharacters'
import AllCharactersByBDD from '@/components/characters/AllCharactersByBDD'
import CharacterDetails from '@/components/characters/CharacterDetails'
import CharacterDetailsBySlug from '@/components/characters/CharacterDetailsBySlug'
import CreateACharacter from '@/components/characters/CreateACharacter'
import SearchACharacter from '@/components/characters/SearchACharacter'
import AllClans from '@/components/clans/AllClans'
import ClanDetails from '@/components/clans/ClanDetails'
import AllBooks from '@/components/Books/AllBooks'
import BookDetails from '@/components/Books/BookDetails'
import CreditContainer from '@/components/layout/CreditContainer'
import PanelAdmin from '@/components/admin/PanelAdmin'
import AllUsers from '@/components/admin/AllUsers'
import AddUserForm from '@/components/admin/AddUserForm'
import PageError from '@/components/pages/PageError'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },{
      path: '/home',
      name: 'Home',
      component: Accueil
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
      props: true,
      component: AllCharacters,
  },{
      path: '/characters/allcharactersByBdd',
      name: 'AllCharactersByBDD',
      props: true,
      component : AllCharactersByBDD
    },{
      path: '/characters/characterDetails/:idCharacter',
      name: "characterDetails",
      component : CharacterDetails,
      props: true
  },{
      path: '/characters/characterDetailsBySlug/:slug',
      name: "characterDetailsBySlug",
      component : CharacterDetailsBySlug,
  },{
    path: '/characters/createacharacter',
    name: 'CreateACharacter',
    component : CreateACharacter
  },
  {
    path: '/characters/searchacharacter',
    name: 'SearchACharacter',
    component: SearchACharacter
  },{
    path: '/clan/allclans',
    name: 'AllClans',
    component : AllClans
  },{
    path: '/clan/clanDetails/:slug',
    name: 'ClanDetails',
    component: ClanDetails
  },{
    path: '/book/allbooks',
    name: 'AllBooks',
    component: AllBooks
  },{
    path: '/book/:slug',
    name: 'BookDetails',
    component: BookDetails
  },{
    path: '/credit',
    name: 'CreditContainer',
    component: CreditContainer
  },{
    path: '/panel-admin',
    name: 'PanelAdmin',
    component: PanelAdmin,
    meta: { needAuth: true },
    children: [
      { path: 'allusers', component: AllUsers, name: 'AllUsers' },
      { path: 'add-user', component: AddUserForm, name: 'AddUserForm' },
    ]
  },
  { path: '/404', component: PageError },  
  { path: '*', redirect: '/404' }, 
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

