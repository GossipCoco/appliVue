/* eslint-disable */
<template>
 <div class="col main-container-app">
    <div class="login-contain">
      <div class="mb-3 presentation-contain">
        <h3>{{msg}}</h3>              
        <b-form @submit="submitAction">
          <b-form-group label="email">
            <b-form-input @change="initMessageError" v-model="email" type="email">
            </b-form-input>
          </b-form-group>
          <b-form-group label="Mot de passe">
            <b-form-input @change="initMessageError" v-model="password"  type="password">
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Connexion</b-button>
          <b-alert show v-if="messageError" variant="danger">
            {{messageError}}
          </b-alert>
        </b-form>
        <p>{{messNotSingIn}} <router-link to="/register"><b-button type="submit" variant="primary">{{messRegister}}</b-button></router-link></p> 
    </div>
  </div>
 </div>
</template>
<script>
import {auth} from "@/firebase"

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Se connecter',
      email: null,
      password: null,
      messageError: false,
      messNotSingIn:'Pas encore inscrit ?',
      messRegister: 'Créer son compte'
    }
  },
  methods: {
    async submitAction(evt){
      evt.preventDefault();
      //console.log({email:this.email,password:this.password})
      try{
        
      await auth.signInWithEmailAndPassword(this.email,this.password);
      this.$router.replace({path:"/panel-admin"})

      }catch(error){
        this.messageError="Erreur de Login/Mot de passe";
        console.log("error", error)
      }
    },
    initMessageError(){
      this.messageError = false;
    }
  }
}
</script>
