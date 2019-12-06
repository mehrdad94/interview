import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Home.vue', function () {
  let store
  let actions
  let state = {}

  beforeEach(() => {
    actions = {
      moveObjectByArrowLeft: jest.fn()
    }
    store = new Vuex.Store({
      state,
      actions
    })
  })

  it('should render without crash', function () {
    shallowMount(Home, { localVue, store })
  })
})
