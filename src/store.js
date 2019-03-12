import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: '空'
  },
  mutations: {
    getMsg(state, payload) {
      state.msg = payload.msg;
    }
  },
  actions: {
    getMsg({commit},params) {
      console.log(params)
      axios.get("/msg", {})
        .then((data) => {
          console.log(data)
          commit("getMsg", data.data)
        })

    }
  }
})