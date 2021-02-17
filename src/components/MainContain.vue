/* eslint-disable */
/*eslint space-before-function-paren: ["error", "never"]*/
/*eslint-env es6*/
<template>
  <div class="main-container">
    <div class="col">
      <all-characters v-bind:charList="listCharacters"/>
    </div>    
  </div>
</template>

<script>
import axios from 'axios'
import MainMenuLeft from './Navigation/MainMenuLeft.vue'
import usersJson from './datas/usersDatas.json'
import photosJson from './datas/photos.json'
import charactersJson from './datas/characters.json'
import UsersList from './Users/UsersList.vue'
import UserDetails from './Users/UserDetails.vue'
import UserComments from './Users/UserComments.vue'
import TestRoutes from './TestRoutes/TestRoutes.vue'
import AllCharacters from './characters/AllCharacters.vue'

export default {
  name: 'MainContain',
  components: {
    'user-list': UsersList,
    'user-details': UserDetails,
    'user-comments': UserComments,
    'main-menu-left': MainMenuLeft,
    'test-routes': TestRoutes,
    'all-characters': AllCharacters
  },
  data () {
    return {
      banImg: '../images/warrior_ban.jpg',
      msg: 'Bienvenue dans l\'application',
      titleBook: '\"La Guerre des Clans\"',
      description: 'Créez vos propres personnages',
      showUserInfoDetail: false,
      showListOfAllUsers: false,
      userDatas: usersJson,
      listPhotos: photosJson,
      listCharacters: charactersJson,
      userPersonnalInfo: '',
      userId: '',
      userUserName: '',
      photoUserId: ''
    }
  },
  computed: {},
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    setUser(value) {
      this.userPersonnalInfo = value,
      this.userId = this.userPersonnalInfo.id,
      this.userUserName = this.userPersonnalInfo.username,
      this.showUserInfoDetail = true
    },
    showAllUsers(){
      this.showListOfAllUsers = true
    }
  }
}
</script>
