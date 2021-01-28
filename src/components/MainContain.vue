/* eslint-disable */
/*eslint space-before-function-paren: ["error", "never"]*/
/*eslint-env es6*/
<template>
<div class="grid-container">
  <div class="row top-main-contain">
    <div class="col">
      <div class="header-ban-contain">
        <img src="../images/warrior_ban.jpg">
        <h3>{{msg}}</h3>
      </div>
    </div>
    <div class="col">
      <login-contain />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="all-users-contain">
        <button  class="btn btn-primary btn-sm" v-on:click="showAllUsers()">Afficher les utilisateurs</button>
        <div v-if="showListOfAllUsers === true" class="list-all-user-contain">
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
      3 of 3
    </div>
  </div>
</div>
</template>

<script>
import usersJson from './datas/usersDatas.json'
import UsersList from './Users/UsersList.vue'
import UserDetails from './Users/UserDetails.vue'
import LoginContain from './Secure/LoginContain.vue'

export default {
  name: 'MainContain',
  components: {
    'user-list': UsersList,
    'user-details': UserDetails,
    'login-contain': LoginContain
  },
  data () {
    return {
      banImg: '../images/warrior_ban.jpg',
      userDatas: usersJson,
      msg: 'Bienvenue dans l\'application La Guerre des Clans',
      description: 'Créez vos propres personnages',
      userPersonnalInfo: '',
      showUserInfoDetail: false,
      showListOfAllUsers: false
    }
  },
  created: function () {
    axios.get(this.userDatas)
      .then((response) => {
        this.users = response.data
      })
  },
  methods: {
    setUser(value) {
      console.log(value)
      this.userPersonnalInfo = value,
      this.showUserInfoDetail = true
    },
    showAllUsers(){
      this.showListOfAllUsers = true
    }
  }
}
</script>
