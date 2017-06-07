// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Layout from './components/layout'

import IndexPage from './pages/index'
Vue.use(VueRouter);
Vue.config.productionTip = false;

var routes =[
  {
    path:"/",
    component:IndexPage
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
