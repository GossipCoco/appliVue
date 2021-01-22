<template>
  <div>
    <p>{{msg}}</p>
    <ul>
      <li v-for="user in usersList" :key="user.id">
        <p>{{user.name}} <button @click="showUser(user)">Plus</button>
        <button @click="emitCustomEvent(user)">Emit Event</button>
        </p>
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
    },
    emitCustomEvent(user) {
      console.log(user);
      this.userInformations = user;
      console.log(this.userInformations);
      this.$emit('show-info-user', this.userInformations);
    }
  }
};
</script>
