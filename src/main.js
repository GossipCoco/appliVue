// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MainContain from '@/components/MainContain'
import LoginContain from '@/components/Secure/LoginContain'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import './assets/css/layouts.css'
import './assets/css/composants.css'
import './assets/css/text.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestion, faQuestionCircle, faSearch, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome)
library.add(faUserSecret, faUser, faSearch, faQuestion, faQuestionCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'MainContain',component: MainContain},
  {
    path: '/login',
    name: 'LoginContain',
    component: LoginContain
  }
];
const allroutes = new VueRouter({ routes: routes });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:allroutes,
  components: { App },
  template: '<App/>'
})
