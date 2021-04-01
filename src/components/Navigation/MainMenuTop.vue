<template>
  <div class="nav-contain">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="container-logo">
          <img :src="require('@/assets/images/'+logo)" alt="Kitten">
        </b-navbar-brand>   
      <b-nav-item><router-link to="/">{{ menu.home }}</router-link></b-nav-item>       
      <b-nav-item-dropdown text="Personnage" left>
        <b-dropdown-item><router-link to="/characters/allcharacters">Tous les personnages</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/characters/allcharactersByBdd">Tous les personnages via BDD</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/characters/createacharacter">Créer un nouveau personnage</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/characters/searchacharacter">Rechercher un personnage</router-link></b-dropdown-item>
      </b-nav-item-dropdown>      
      <b-nav-item><router-link to="/clan/allclans">{{ menu.allClans }}</router-link></b-nav-item>
      <b-nav-item><router-link to="/book/allbooks">{{ menu.allBooks }}</router-link></b-nav-item>
      <b-nav-item><router-link to="/credit">{{ menu.credit }}</router-link></b-nav-item>
      <b-nav-item-dropdown show v-if="connected" text="Admin" left>
        <b-dropdown-item><router-link to="/panel-admin/allusers">{{ menu.admin }}</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/user/allusers">{{ menu.allUsers}}</router-link></b-dropdown-item>
        <b-dropdown-item>{{ menu.userGestion }}</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item></b-nav-item>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item v-if="!connected"><router-link to="/login" >{{ menu.login }}</router-link></b-nav-item>
            <b-nav-item v-if="!connected"><router-link to="/register" v-if="userId !== null">{{ menu.register }}</router-link></b-nav-item>
            <b-nav-item v-if="connected"><router-link v-bind:to="'/user/userProfil/'+userId">{{ menu.profil }}</router-link></b-nav-item>
            <b-nav-item v-if="connected" @click="logout">{{ menu.logout }}</b-nav-item>    
          </b-navbar-nav>
        </b-navbar-nav>
        <b-navbar-brand>
          <img src="https://placekitten.com/g/30/30" alt="Kitten">
        </b-navbar-brand>
        
    </b-navbar>
  </div>
</template>
<script>
import { auth } from "@/firebase";
export default {
  name: 'main-menu-top',
  data(){
    return{
      logo: 'logo.png',
      loginUser: true,
      connected: false,
      userId: 0,
      menu:{
        home: 'Accueil',
        login: 'Se connecter',
        register: 'Créer son compte',
        credit: 'Credits',
        userGestion: 'Gérer les Utilisateur',
        allUsers: 'Utilisateurs',
        allClans: 'Tous les Clans',        
        allBooks: 'Tous les romans',
        profil: 'Profil',
        admin: 'Admin',
        logout: 'Se déconnecter'
      }
    }
  },
    mounted() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.connected = true;
      } else {
        this.connected = false;
      }
    });
  },
  methods: {
    logout() {
      auth.signOut();
      this.$router.replace("/");
    }
  }
}
</script>