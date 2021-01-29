/* eslint-disable */
<template>
  <div>
    <p>{{msg}}</p>
    <ul  class="list-group">
      <li v-for="user in usersList" :key="user.id"  class="list-group-item">
        {{user.name}} <button  type="button" class="btn btn-link" @click="emitCustomEvent(user)">Plus d'info</button>
      </li > 
    </ul>
  </div>
</template>
<script>
export default {
  name: "UsersList",
  props:['usersList', 'listPhotos'],
  components:{
  },data (){
    return{
        msg: 'Tous les utilisateurs',
        userName: '',
        userInformations: [],
        showUserInfoDetail: true
      }  
  },methods: {
    showUser: function (user) {
      console.log(this.listPhoto)
      this.userInformations = user;
    },
    emitCustomEvent(user) {
      this.userInformations = user;
      this.$emit('show-info-user', this.userInformations);
    }
  }
};
</script>
