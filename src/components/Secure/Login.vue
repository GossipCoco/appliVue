/* eslint-disable */
<template>
 <div class="col main-container-app">
    <div class="login-contain">
      <div class="mb-3">
        <h3>Se connecter</h3>
        <label class="form-label">Email</label>
      <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Votre email" v-model="dataLogin.login">
      </div>
      <div class="mb-3">
      <label class="form-label">Mot de passe</label>
      <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Votre mot de passe" v-model="dataLogin.pwd">
      </div>
        <router-link to="/home" class="btn btn-primary">Se connecter</router-link>
        Pas encore inscrit? <router-link to="/register">Register</router-link>
    </div>
 </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Se logger',
      dataLogin: {
        'login': 'Votre Email',
        'pwd': 'Votre mot de passe'
      }
    }
  }
}
</script>
