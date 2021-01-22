/* eslint-disable */
<template>
  <div>
    <p>{{msg}}</p>
    <ul>
      <li v-for="user in usersList" :key="user.id">
        <p>
          {{user.name}} <button  type="button" class="btn btn-link" @click="emitCustomEvent(user)">Plus d'info</button>
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
      this.userInformations = user;
      this.$emit('show-info-user', this.userInformations);
    }
  }
};
</script>

function newFunction() {
  console.log(this.userInformations);
}
