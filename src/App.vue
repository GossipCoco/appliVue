/* eslint-disable */
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<template>
  <div>
    <div class="container-fluid">
      <main-menu-top />
      <div class="main-content">
        <main-contain />
      </div>
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
