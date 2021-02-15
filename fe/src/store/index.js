import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore(context = {}) {
  return new Vuex.Store({
    state: {
      params: context && context.params ? context.params : {}
    },
    mutations: {},
    actions: {}
  })
}
