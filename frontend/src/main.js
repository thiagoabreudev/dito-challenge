// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import LightTimeline from 'vue-light-timeline'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'
import "@/filter/filter.js"

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)
Vue.use(LightTimeline);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
