import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: false,
  initState: false
}

const getters = {
  getLoading: state => {
    return state.loading
  },
  getInitState: state => {
    return state.initState
  }
}

const mutations = {
  setLoading (state, type) {
    state.loading = type
  },
  setInitState (state, type) {
    state.initState = type
  }
}

const actions = {

}

export default new Vuex.Store({
  // modules: {
  //   cart,
  //   products
  // },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
  state,
  mutations,
  getters,
  actions
})
