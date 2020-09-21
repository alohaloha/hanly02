export const state = () => ({
  num: 0,
})

export const getters = {
  num(state) {
    return state.num
  },
}

export const mutations = {
  setNum(state, num) {
    state.num = num
  },
}

export const actions = {
  async saveNum({ commit }, { number }) {
    // const num = await this.$axios.post(...) 本来はサーバーへリクエストを書くことが多い
    const num = await getValueAfter100ms(number)
    commit('setNum', num)
  },
}

// 1秒後に値を返すだけの関数、サーバーっぽい挙動にするため。
function getValueAfter100ms(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num)
    }, 100)
  })
}
