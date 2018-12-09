import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = () => {
  return {
    todoList: []
  }
}

const mutations = {
  UPDATE_TODO(state, data) {
    state.todoList = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
