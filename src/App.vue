<template>
<div>
  <div class="main-content">
        <main-menu />
        <main-contain />
    <!-- <footer-contain /> -->
    </div>
</div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import MainContain from './components/MainContain.vue'
import FooterMain from './components/layout/FooterContain.vue'
export default {
  name: 'App',
  components: {
    'main-menu': MainMenu,
    'main-contain': MainContain,
    'footer-contain': FooterMain
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
