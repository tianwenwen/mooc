/**
 * Created by Lanxumit on 2017/6/21.
 */
  import  Vue from 'vue';
const state = {//存放数据
  orderList: [],
  params: {}
};
const getters = {//用于页面去调用state值
  getOrderList:function(state){
    return state.orderList
  }
};

// actions
const actions = {//可以进行异步操作的动作
  fetchOrderList ({commit,state}){
    //commit 用来调用mutations
    //state 用来调用数据集里的数据的
    Vue.http.post('/api/getOrderList',state.params).then(function(data){
      commit('updateOrderList',data.data.list);
    },function(err){

    });
  }
};

// mutations
const mutations = {//同步对对状态的而更改
  updateOrderList:function(state,orderList){
    state.orderList = orderList;
  },
  updatePrams:function(state,{key,val}){
    state.params[key] = val;
    console.log(state.params);
  }
};
export default{
  state,
  getters,
  actions,
  mutations
}
