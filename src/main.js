import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

import './assets/bootstrap/css/bootstrap.css'
import './assets/css/index.css'
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [

]
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})