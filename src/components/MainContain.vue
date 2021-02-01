/* eslint-disable */
/*eslint space-before-function-paren: ["error", "never"]*/
/*eslint-env es6*/
<template>
<div class="grid-container">
  <div class="row top-main-contain">
    <div class="col title-site-containe">
      <h3>{{msg}}</h3>
      <h3 class="titleBook">{{titleBook}}</h3>
    </div>    
  </div>
  <div class="row main-app-containe">
    <!-- <div class="col sm login-container">       
      <login-contain />
    </div> -->
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
      <div class="user-information" v-if="showUserInfoDetail === true">
        <user-comments v-bind:photoUser="listPhotos" v-on:showImgUsr="showPhoto(photoUserId)" />
      </div>
    </div>    
  </div>
</div>
</template>

<script>
import UsersList from './Users/UsersList.vue'
import UserDetails from './Users/UserDetails.vue'
import UserComments from './Users/UserComments.vue'
import LoginContain from './Secure/LoginContain.vue'

export default {
  name: 'MainContain',
  components: {
    'user-list': UsersList,
    'user-details': UserDetails,
    'login-contain': LoginContain,
    'user-comments': UserComments
  },
  data () {
    return {
      banImg: '../../assets/images/warrior_ban.jpg',
      userDatas: './datas/usersDatas.json',
      listPhotos: './datas/photos.json',
      msg: 'Bienvenue dans l\'application',
      titleBook: '\"La Guerre des Clans\"',
      description: 'Créez vos propres personnages',
      userPersonnalInfo: '',
      showUserInfoDetail: false,
      showListOfAllUsers: false,
      userId: '',
      photoUserId: ''
    }
  },
  created: function () {
    axios.get(this.userDatas)
      .then((response) => {
        this.users = response.data
      })
      .catch(error => {
        console.log(error.response)
      }),
      axios.get(this.listPhotos).then((response) => {
        this.photos = response.data        
      })
      .catch(error => {
        console.log(error.response)
      })
  },
  methods: {
    setUser(value) {
      //console.log(value)
      this.userPersonnalInfo = value,
      //console.log(this.userPersonnalInfo.id),
      this.userId = this.userPersonnalInfo.id,
      this.showUserInfoDetail = true
    },
    showAllUsers(){
      this.showListOfAllUsers = true
    },
    showPhoto(photoUserId){
      console.log(photoUserId)
    }
  }
}
</script>
