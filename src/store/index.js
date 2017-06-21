/**
 * Created by Lanxumit on 2017/6/21.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import orderList from './modules/orderList'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: { //模型
    orderList
  }
})
