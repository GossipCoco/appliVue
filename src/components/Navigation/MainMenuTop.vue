<template>
  <div class="nav-contain">
    <!--<b-navbar class="navbar navbar-dark bg-primary navbar-link">
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/">Accueil</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/login">Login</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/register">Register</router-link>
        </b-nav-item>
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar> -->
<b-navbar toggleable="lg" type="dark" variant="info">
    <b-nav-item><router-link to="/">Accueil</router-link></b-nav-item>    
    <b-collapse id="nav-collapse" is-nav>
        <b-nav-item-dropdown text="Personnage" left>
          <b-dropdown-item><router-link to="/characters/allcharacters">Tous les personnages</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/characters/createacharacter">Créer un nouveau personnage</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Utilisateur" left>
          <b-dropdown-item><router-link to="/user/allusers">Utilisateurs</router-link></b-dropdown-item>
          <b-dropdown-item>Gérer les Utilisateur</b-dropdown-item>
        </b-nav-item-dropdown>
      <b-nav-item><router-link to="/credit">Crédits</router-link></b-nav-item>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-navbar-nav>
          <b-nav-item><router-link to="/login">Login</router-link></b-nav-item>
          <b-nav-item><router-link to="/register">Register</router-link></b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>






  </div>
</template>
<script>
export default {
  name: 'main-menu-top'
}
</script>