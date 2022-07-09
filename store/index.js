export const state = () => ({
  token: ''
})

export const getters = {
  getToken(state) {
    return state.token
  }
}

export const mutations = {
  rememberToken(state, token) {
    state.token = token
  }
}

export const actions = {
  async fetchCounter(state) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}
