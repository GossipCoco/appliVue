/* eslint-disable */
<template>
  <div>
    <div class="global-contain">
      <main-menu-top />
      <div class="main-content">     
           
        <router-view/>
      </div>
      <footer-contain />
    </div>
  </div>
</template>
<script>
import MainMenuTop from './components/Navigation/MainMenuTop.vue'
import MainContain from './components/MainContain.vue'
import FooterMain from './components/layout/FooterContain.vue'

export default {
  name: 'App',
  components: {
    'main-contain': MainContain,
    'main-menu-top': MainMenuTop,
    'footer-contain': FooterMain
  }
}
</script>
