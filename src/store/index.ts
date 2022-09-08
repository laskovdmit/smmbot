import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'

const plugins: any = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  plugins,
  state() {
    return {}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  }
})
