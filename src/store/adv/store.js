import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex)

export const advStore = new Vuex.Store({
  state: {

    // array of arrays [ [{date: '', comment: ''}, {date: '', comment: ''}], ticker] ]
    comments: [],


  },
  getters,
  actions,
  mutations,

  modules: {
    // counter
  }
})