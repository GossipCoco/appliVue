<template>
  <div>
    <div class="nav-contain">
      <b-navbar class="navbar navbar-dark bg-primary">
        <b-navbar-nav>
          <b-nav-item href="/">
          Home
          </b-nav-item>
          <b-nav-item href="/login">
            Login
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
  name: 'main-menu-top'
}
</script>