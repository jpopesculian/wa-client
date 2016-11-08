import * as types from './types'

const state = {
  count: 0
}

const mutations = {
  [types.INCREMENT_COUNT] (state) {
    state.count++
  }
}

const actions = {
  [types.IncrementCountAsync] ({commit}) {
    setTimeout(() => {
      commit(types.INCREMENT_COUNT)
    }, 200)
  }
}

const counter = {
  state,
  mutations,
  actions
}

console.log(counter)

export default counter
