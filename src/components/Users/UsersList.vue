/* eslint-disable */
<template>
  <div class="row">
      <div class="col main-container-app">
        <div class="all-users-contain">               
          <div class="list-all-user-contain">
            <ul  class="list-group">
              <li v-for="user in usersList" :key="user.id"  class="list-group-item">
                {{user.name}}<br> <button  type="button" class="btn btn-link" @click="emitCustomEvent(user)" v-on:click="setUser(user)">Plus d'info</button>
                <br>
                <router-link v-bind:to="'/user/userProfil/'+user.id" v-bind:usrInfo="user.id">Voir le profil complet</router-link>
                <router-view v-bind:usrInfo="user.id"></router-view>
              </li > 
            </ul>
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
</template>
<script>
import usersJson from '../datas/usersDatas.json'
import photosJson from '../datas/photos.json'
import UserDetails from './UserDetails'
import UserComments from './UserComments'
export default {
  name: "UsersList",
  components:{
    'user-details': UserDetails,
    'user-comments': UserComments,
  },data (){
    return{
        msg: 'Tous les utilisateurs',
        userName: '',
        userInformations: [],
        showUserInfoDetail: false,
        usrId: '',
        usersList: usersJson,
        userPersonnalInfo: '',
        listPhotos: photosJson,
        userId: '',
        userUserName: '',
        photoUserId: ''
      }  
  },methods: {
    showUser: function (user) {
      console.log(user.id)
      this.userInformations = user;
    },
    emitCustomEvent(user) {
      this.userInformations = user;
      this.$emit('show-info-user', this.userInformations);
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
};
</script>
