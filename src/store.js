import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
  someAction () {
    console.log('actions.someAction')
  }
}

export default new Vuex.Store({
  actions
})
