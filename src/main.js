// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Layout from './components/layout'

import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAna from './pages/detail/analysis.vue';
import DetailCou from './pages/detail/count.vue';
import DetailFor from './pages/detail/forecast.vue';
import DetailPub from './pages/detail/publish.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;

var routes =[
  {
    path:"/",
    component:IndexPage
  },
  {
    name:'detail',
    path:'/detail',
    redirect:"/detail/count",
    component:DetailPage,
    children:[
      {
        path:'count',
        component:DetailCou
      },
      {
        path:'forecast',
        component:DetailFor
      },
      {
        path:'analysis',
        component:DetailAna
      },
      {
        path:'publish',
        component:DetailPub
      }
    ]
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
