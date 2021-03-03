/* eslint-disable */
<template>
  <div class="global-contain">
    <main-menu-top />
    <div class="main-content">
      <div class="row">
        <div class="col col-main-contain">
          <div class="row main-app-containe">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainMenuTop from './components/Navigation/MainMenuTop.vue'
import MainContain from './components/MainContain.vue'
import MainMenuLeft from './components/Navigation/MainMenuLeft.vue'
import FooterMain from './components/layout/FooterContain.vue'

export default {
  name: 'App',
  components: {
    'main-contain': MainContain,
    'main-menu-top': MainMenuTop,
    'footer-contain': FooterMain,
    'main-menu-left': MainMenuLeft
  },
  data (){
    return{
      banImg: '../images/warrior_ban.jpg',
      msg: 'Bienvenue dans l\'application',
      titleBook: '\"La Guerre des Clans\"',
      description: 'Créez vos propres personnages',
    }
  }
}
</script>
