<template>
  <div class="nav-contain">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="container-logo">
          <img src="https://raw.githubusercontent.com/GossipCoco/appliVue/dev/src/assets/images/logo.png" alt="Kitten">
        </b-navbar-brand>   
      <b-nav-item><router-link to="/">{{ menu.home }}</router-link></b-nav-item>       
      <b-nav-item-dropdown text="Personnage" left>
        <b-dropdown-item><router-link to="/characters/allcharacters">Tous les personnages</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/characters/createacharacter">Créer un nouveau personnage</router-link></b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown text="Utilisateur" left>
        <b-dropdown-item><router-link to="/user/allusers">{{ menu.allUsers}}</router-link></b-dropdown-item>
        <b-dropdown-item>{{ menu.userGestion }}</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item><router-link to="/clan/allclans">{{ menu.allClans }}</router-link></b-nav-item>
      <b-nav-item><router-link to="/credit">{{ menu.credit }}</router-link></b-nav-item>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->
          <b-navbar-nav>
            <b-nav-item v-if="loginUser === true"><router-link to="/login" >{{ menu.login }}</router-link></b-nav-item>
            <b-nav-item v-if="loginUser === false"><router-link to="/register" v-if="userId !== null">{{ menu.register }}</router-link></b-nav-item>
            <b-nav-item v-if="loginUser === true"><router-link v-bind:to="'/user/userProfil/'+userId">{{ menu.profil }}</router-link></b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
        <b-navbar-brand>
          <img src="https://placekitten.com/g/30/30" alt="Kitten">
        </b-navbar-brand>    
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'main-menu-top',
  data(){
    return{
      loginUser: true,
      userId: 0,
      menu:{
        home: 'Accueil',
        login: 'login',
        register: 'Créer son compte',
        credit: 'credits',
        userGestion: 'Gérer les Utilisateur',
        allUsers: 'Utilisateurs',
        allClans: 'Tous les Clans',
        profil: 'Profil'
      }
    }
  }
}
</script>