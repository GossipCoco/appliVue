/* eslint-disable */
<template>
  <div class="row container-global-all-user">
      <div class="col-3 main-container-app  presentation-contain ">
        <div class="all-users-contain contain-user-info">               
          <div class="list-all-user-contain">
            <ul  class="list-group">
              <li v-for="user in usersList" :key="user.id"  class="list-group-item contain-list">
                <p>{{user.name}}</p>
                <button  type="button" class="btn btn-link btn-sm" @click="emitCustomEvent(user)" v-on:click="setUser(user)">Plus d'info</button>                
                <router-link type="button" class="btn btn-link btn-sm" v-bind:to="'/user/userProfil/'+user.id" v-bind:usrInfo="user.id"><p>Voir le profil complet</p></router-link>
                <router-view v-bind:usrInfo="user.id"></router-view>
                <div v-on="methodTest"></div>
              </li > 
            </ul>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="row">
          <div class="col-12  main-container-app  presentation-contain " v-if="showUserInfoDetail === true">
            <div class="user-information contain-user-info">
              <user-details  v-bind:usrInfo="userPersonnalInfo"></user-details>
            </div>
          </div>
          <div class="col-12  main-container-app  presentation-contain " v-if="showUserInfoDetail === true">
            <div class="user-information contain-user-info">
              <user-comments v-bind:photoUser="listPhotos" v-bind:userId="userId" v-bind:userUsrName="userUserName"/>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import usersJson from '../datas/json/usersDatas.json'
import photosJson from '../datas/json/photos.json'
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
    },
    methodTest(){
      console.log('Click')
    }
  }
};
</script>
