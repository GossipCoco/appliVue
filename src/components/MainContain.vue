/* eslint-disable */
<template>
<div class="grid-container">
  <div class="grid-item item1">
    <h3>{{msg}}</h3>
  </div>
  <div class="grid-item item2"><p>Image à venir to do debug</p></div>
  <div class="grid-item item3"><p>{{description}}</p></div>
  <div class="grid-item item4"><p>Se loger</p></div>
  <div class="grid-item item5">
  <p>5</p>
  <p><user-list v-bind:data="users" v-bind:users-coming="userWelcome"></user-list></p>
  </div>
</div>
</template>

<script>
import UsersList from './Users/UsersList.vue'
export default {
  name: 'MainContain',
  components: {
    'user-list': UsersList
  },
  data () {
    return {
      msg: 'Bienvenue dans l\'application La Guerre des Clans',
      description: 'Créez vos propres personnages',
      img: '../images/etoile-de-feu.png',
      userDatas: 'https://jsonplaceholder.typicode.com/users',
      users: [],
      userWelcome: []
    }
  }
}
</script>
