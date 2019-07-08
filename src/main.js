import Vue from 'vue'
import App from './App.vue'

import HeroList from "./components/views/heroes/HeroList.vue"
import WeaponList from "./components/views/weapons/WeaponList.vue"
import EquipList from "./components/views/equips/EquipList.vue"
// 导入vue-router
import VueRouter from 'vue-router'
Vue.config.productionTip = false
// 导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
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
]
})
new Vue({
  el: '#app',
  render: h => h(App),
  // 配置路由对象
  router
})