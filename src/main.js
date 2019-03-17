// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import smoothScroll from 'vue-smoothscroll'
import course from '@/store/courses'
import axios from 'axios';

Vue.prototype.$axios = axios;

Vue.use(smoothScroll)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCvuYSSbkq7rSo6bRuSEsm4TOi5zeaYpF0',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  course,
  components: { App },
  template: '<App/>'
})
