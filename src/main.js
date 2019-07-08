import Vue from 'vue'
import App from './App.vue'
import HeroList from "./components/views/heroes/HeroList.vue"
// 导入vue-router
import VueRouter from 'vue-router'
Vue.config.productionTip = false
// 导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
// 配置vue的插件vue-router
Vue.use(VueRouter);
const router = new VueRouter({
  // 配置路由规则
  routes: [
    {name:"home",path:"/", redirect:"/heroes"},
    {
      name: "heroes", path: "/heroes", component: HeroList
    }
]
})
new Vue({
  el: '#app',
  render: h => h(App),
  // 配置路由对象
  router
})