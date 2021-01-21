<template>
  <div class="users-container">
    <div class="user-list">
      <ul>
        <li v-for="(usersList, id) in users" :key="id">
          <user-details v-bind:usr="user" v-on:accept="registerUser(user)"></user-details>
          <p>{{ usersList.name }} - <button v-on:click="acceptInvitation">Accept invit</button></p>
          
        </li>
      </ul>
    </div>
    <div class="user-details">
      <user-details v-bind:userInformation="userInformation"/>
      <p></p>
    </div>
  </div>
</template>
<script>
import UserDetails from "./UserDetails.vue";
import users from "./../datas/usersDatas.json";
export default {
  name: "UsersList",
  components:{
    'user-details': UserDetails
  },
  data (){
    return{
      userInformation:'',
      users,
      userNameSelected: ''
      }  
  },
  created: function () {
    axios
      .get(this.users)
      .then(response => (this.usersList = response))
  },
  methods: {
    showUserInfo: function(userNameSelected){
      console.log(userNameSelected)
    },
    acceptInvitation: function(){
      console.log('accept')
      this.$emit('accept');
      }
  }
};
</script>
