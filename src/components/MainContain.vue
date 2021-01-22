<template>
<div class="grid-container">
  <div class="grid-item item1">
    <h3>{{msg}}</h3>
  </div>
  <div class="grid-item item3">
    <p>{{description}}</p>
  </div>
  <div class="grid-item item5">
    <div class="users-container">
      <div class="user-list">
      <user-list v-bind:usersList="userDatas"/>
      </div>
      <div class="user-information">
        <user-details @show-info-user="setUser"></user-details>
        <p>{{userPersonnalInfo}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import usersJson from "./datas/usersDatas.json"
import UsersList from './Users/UsersList.vue'
import UserDetails from './Users/UserDetails.vue'
export default {
  name: 'MainContain',
  components: {
    'user-list': UsersList,
    'user-details': UserDetails
  },
  data () {
    return {
      userDatas: usersJson,
      msg: 'Bienvenue dans l\'application La Guerre des Clans',
      description: 'Créez vos propres personnages',
      userPersonnalInfo: '',
    }
  },created: function() {
    axios.get(this.userDatas)
      .then((response) => {
          this.users = response.data;
          console.log(this.users);
      })
  },
  methods: {
      // Define method that will use the payload to update the data property
      setUser(value) {
        console.log(value);
          //this.message = payload.message
      }
  }
}
</script>
