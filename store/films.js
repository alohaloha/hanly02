export const state = () => ({
  films: [],
})

export const getters = {
  films(state) {
    return state.films
  },
}

export const mutations = {
  setFilms(state, films) {
    // commitで渡されるfilms
    // stateのfilmsに渡されたfilmsを代入
    state.films = films
  },
}

export const actions = {
  async fetchFilms({ commit }) {
    // axios は AJAX 用の関数
    // 要は JavaScript で、URL からデータをとってきて変数にいれるためのもの
    const res = await this.$axios('https://ghibliapi.herokuapp.com/films')
    const films = res.data // 配列で映画データが入ってくる
    commit('setFilms', films) // mutations に渡す
  },
}
