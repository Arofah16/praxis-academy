import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 10
  },
  mutations: {
    addAngka: function(state){
      state.num++
    },
  },
  actions: {
    angka: function(context){
        context.commit("addAngka")
    }
  },
  modules: {
  }
})
