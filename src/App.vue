/* eslint-disable */
<template>
  <div>
    <main-menu />
    <div class="container">
      <div class="main-content">
        <main-contain />
      </div>
    </div>   
    <footer-contain /> 
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
