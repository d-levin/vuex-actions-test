/* eslint-disable */

import Vuex from 'vuex'
import { mount, createLocalVue } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld'
import Child from '@/components/Child'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HelloWorld.vue', () => {
  let store
  let actions
  let wrapper

  beforeEach(() => {
    actions = {
      someAction: sinon.mock()
    }
    store = new Vuex.Store({
      actions
    })
    wrapper = mount(HelloWorld, { store, localVue })
  })

  it('should dispatch action', () => {
    wrapper.find(Child).trigger('click')
    /**
     * This will fail if Vuex is not installed on the global
     * Vue instance even when using createLocalVue
     * To make the assertion pass, uncomment lines 12-13 in test/unit/index.js
     */
    expect(actions.someAction).to.have.been.called
  })
})
