// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import { store } from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import routes from './router/index.js'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/boostrap/fontawesome.min.css'
import './assets/css/main.css'
import './assets/css/layouts.css'
import './assets/css/form.css'
import './assets/css/composants.css'
import './assets/css/text.css'
import './assets/css/pagenotfound.css'

import { auth } from "@/firebase";

library.add(faFontAwesome)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueAxios, axios)

routes.beforeEach((to, from, next) => {
  const isAuthenticated = auth.currentUser;
  const isProtected = to.matched.some(route => route.meta.needAuth);

  if (!isAuthenticated && isProtected) {
    next("/");
  } else {
    next();
  }
});
/* eslint-disable no-new */
const app = new Vue({
  render: h =>h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
  store,
  router: routes,
}).$mount("#app");