// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Layout from './components/layout'

import IndexPage from './pages/index'
import BuyPage from './pages/buy'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;

var routes =[
  {
    path:"/",
    component:IndexPage
  },
  {
    name:'buy',
    path:'/buy',
    component:BuyPage
  }
]
var router = new VueRouter({
  mode:'history',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
