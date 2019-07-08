import Vue from 'vue'
import App from './App.vue'

import HeroList from "./components/views/heroes/HeroList.vue"
import herosAdd from "./components/views/heroes/herosAdd.vue"
import herosEdit from "./components/views/heroes/herosEdit.vue"
import WeaponList from "./components/views/weapons/WeaponList.vue"
import EquipList from "./components/views/equips/EquipList.vue"
// 导入vue-router
import VueRouter from 'vue-router'
Vue.config.productionTip = false
// 导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
// 导入axios
import axios from 'axios';
// 配置所有Vue的实例都具有axios这个成员
Vue.prototype.axios = axios;
// 设置baseURL
axios.defaults.baseURL = 'http://localhost:3000/';
// 配置vue的插件vue-router
Vue.use(VueRouter);
const router = new VueRouter({
   linkActiveClass: 'active',
  // 配置路由规则
  routes: [
    {name:"home",path:"/", redirect:"/heroes"},
    {
      name: "heroes", path: "/heroes", component: HeroList
    },
     {
      name: "weapons", path: "/weapons", component: WeaponList
    },
    {
      name: "equips", path: "/equips", component: EquipList
    },
     {
      name: "heroesadd", path: "/heroes/add", component: herosAdd
    },
    {
      name: "heroesedit", path: "/heroes/edit/:id", component: herosEdit, props:true
    }
]
})
new Vue({
  el: '#app',
  render: h => h(App),
  // 配置路由对象
  router
})