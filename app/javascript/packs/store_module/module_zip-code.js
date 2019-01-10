import { store } from '../store'
 
export default {
  namespaced: true,
  state: {
    data: {
      message: 'モジュールCだよ'
    }
  },
  mutations: {
    resetMessage(){
      store.state.moduleC.data.message = ''
    }
  },
  actions: {
    getGreeting(ctx){
      //コンテキストに与えられているrootState, rootGettersを呼び出す
      let payload = ctx.rootGetters.greeting + " " + ctx.rootState.data.name
      
      //グローバルのgreetingミューテーションを呼び出す
      ctx.commit('greeting', payload, { root: true })
    }
  },
  getters: {
    greetingC: (state, getters, rootState, rootGetters) => {
      return 'これはCのほうの' + rootState.data.message 
    }
  }
}

