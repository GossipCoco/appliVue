/* eslint-disable */
<template>
    <div class="row">
      <div class="col">
          <div class="all-users-contain">               
            <div class="list-all-user-contain">
              <ul  class="list-group">
                <li v-for="user in usersList" :key="user.id"  class="list-group-item">
                  {{user.name}} <button  type="button" class="btn btn-link" @click="emitCustomEvent(user)" v-on:click="setUser(user)">Plus d'info</button>
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
    </div>    
</template>
<script>
import usersJson from '../datas/usersDatas.json'
import UserDetails from './UserDetails'
export default {
  name: "UsersList",
  props:['listPhotos'],
  components:{
    'user-details': UserDetails
  },data (){
    return{
        msg: 'Tous les utilisateurs',
        userName: '',
        userInformations: [],
        showUserInfoDetail: true,
        usrId: '',
        usersList: usersJson,
        userPersonnalInfo: '',
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
