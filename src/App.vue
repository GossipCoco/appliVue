<template>
  <div>
    <div class="main-content">
      <main-menu />
      <main-contain />
      <footer-contain />
    </div>
  </div>
</template>

<script>
import axios from "axios";
const instance = axios.create();
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