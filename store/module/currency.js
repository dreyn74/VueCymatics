import * as types from '../types'

const state = {
  status: {
    loading: true,
    success: false,
    error: false
  }
};

const getters = {
  loading: state => state.status.loading
};

const actions = {
  getItems({ commit }) {
    commit(types.LOADING);
  }
}

const mutations = {
  [types.LOADING](state) {
    state.status = {
      loading: true,
      success: false,
      error: false
    };
  },
  [types.SUCCESS](state) {
    state.status = {
      loading: false,
      success: true,
      error: false
    };
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}