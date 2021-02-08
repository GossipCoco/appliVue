<template>
  <div class="nav-contain">
    <b-navbar class="navbar navbar-dark bg-primary navbar-link">
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/login">Home</router-link>
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
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'main-menu-top'
}
</script>