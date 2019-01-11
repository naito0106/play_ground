import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import moduleZipCode from './store_module/module_zip-code'
Vue.use(Vuex)

export const store = new Vuex.Store({
  //グローバルなstore
  state: {
    data: {
      message: 'グローバルなモジュールだよ'
    }
  },
  mudations: {
    
  },
  actions: {
    
  },
  getters: {
    greetingG: (state, getters) => {
      return 'これはグローバルの' + state.data.message 
    }
  },
  //modules
  modules: {
    //moduleCを読み込み
    moduleZipCode: moduleZipCode,
    //moduleAを作成
    moduleA: {

      
      state: {
        data: {
          message: 'モジュールAだよ'
        }
      },
      getters: {
        greetingC: (rootState, rootGetters, aaa, getters) => {
          return rootState.data.name + 'さんこんにちわ by' + aaa.data.name 
        }
      }
    }
  }
})

store.registerModule('moduleB', {
  namespaced: true,
  
  state: {
    data: {
      message: 'モジュールBだよ'
    }
  },
  getters: {
    greetingB: (state, getters, rootState, rootGetters) => {
      return 'これは' + rootState.data.message 
    }
  }
})