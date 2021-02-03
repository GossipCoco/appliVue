<template>
  <div>
    <div class="nav-contain">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/home">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/login">Login</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            Register
          </b-nav-item>
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
    </div>
  </template>
<script>
    export default {
  name: 'menu',
  data () {
    return {}
  }
}
</script>