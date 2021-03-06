import Vue from 'vue'
import App from './app/App'
import router from './router'
import FastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper'

FastClick.attach(document.body);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//router:router
  template: '<App/>',
  components: { App }
})
