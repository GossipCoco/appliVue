<template>
  <div>
    <p>{{msg}}</p>
    <ul>
      <li v-for="user in usersList" :key="user.id">
        <p>{{user.name}} <button v-on:click="showUser(user)">Plus</button></p>
      </li > 
    </ul>
  </div>
</template>
<script>
export default {
  name: "UsersList",
  props:['usersList'],
  components:{
  },data (){
    return{
        msg: 'Tous les utilisateurs',
        userName: '',
        userInformations: []
      }  
  },methods: {
    showUser: function (user) {
      console.log(user);
      this.userInformations = user;
      console.log(this.userInformations);
     

    }
  }
};
</script>
