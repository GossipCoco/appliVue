/* eslint-disable */
/*eslint space-before-function-paren: ["error", "never"]*/
/*eslint-env es6*/
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
      <div class="container">
        <div class="row  align-items-start">
          <div class="col">
            <div class="user-list">
              <user-list v-bind:usersList="userDatas" v-on:show-info-user="setUser"/>
            </div>
          </div>
          <div class="col">
            <div class="user-information" v-if="showUserInfoDetail === true">
              <user-details  v-bind:usrInfo="userPersonnalInfo"></user-details>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import usersJson from './datas/usersDatas.json'
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
      showUserInfoDetail: false
    }
  },
  created: function () {
    axios.get(this.userDatas)
      .then((response) => {
        this.users = response.data
      })
  },
  methods: {
    setUser(value) {
      console.log(value)
      this.userPersonnalInfo = value,
      this.showUserInfoDetail = true
    }
  }
}
</script>
