/* eslint-disable */
/*eslint space-before-function-paren: ["error", "never"]*/
/*eslint-env es6*/
<template>
<div class="grid-container">
  <div class="row">
    <div class="col col-md-auto menu-left">
      <main-menu-left />
    </div>
    <div class="col">
      <div class="row">
        <div class="col col-main-contain">
          <div class="row top-main-contain">
            <div class="col title-site-containe">
              <h3>{{msg}}</h3>
              <h3 class="titleBook">{{titleBook}}</h3>
            </div>    
          </div>
          <div class="row main-app-containe">
            <div class="col">
              <div class="all-users-contain">
                <!-- <button  class="btn btn-primary btn-sm" v-on:click="showAllUsers()">Afficher les utilisateurs</button> -->
                <div class="list-all-user-contain">
                  <user-list v-bind:usersList="userDatas" v-on:show-info-user="setUser"/>
                </div>
              </div>
            </div>
            <div class="col">
                  <div class="user-information" v-if="showUserInfoDetail === true">
                    <user-details  v-bind:usrInfo="userPersonnalInfo"></user-details>
                  </div>
            </div>
            <div class="col">
              <div class="user-information" v-if="showUserInfoDetail === true">
                <user-comments v-bind:photoUser="listPhotos" v-bind:userId="userId" v-bind:userUsrName="userUserName"/>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import MainMenuLeft from './Navigation/MainMenuLeft.vue'
import usersJson from './datas/usersDatas.json'
import photosJson from './datas/photos.json'
import UsersList from './Users/UsersList.vue'
import UserDetails from './Users/UserDetails.vue'
import UserComments from './Users/UserComments.vue'
export default {
  name: 'MainContain',
  components: {
    'user-list': UsersList,
    'user-details': UserDetails,
    'user-comments': UserComments,
    'main-menu-left': MainMenuLeft
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
