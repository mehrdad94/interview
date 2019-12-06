import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TheSeesawDropBox from '@/components/TheSeesawDropBox'

const localVue = createLocalVue()

localVue.use(Vuex)

const stubs = ['BaseTriangle']

describe('TheSeesawDropBox.vue', function () {
  let store
  let getters
  beforeEach(() => {
    getters = {
      getDropBoxObject: () => ({
        top: '2px'
      })
    }

    store = new Vuex.Store({
      getters
    })
  })

  it('should set falling object style', function () {
    const wrapper = shallowMount(TheSeesawDropBox, { localVue, store, stubs })

    const fallingObjectElm = wrapper.find('#fallingObject')

    expect(fallingObjectElm.element.style.top).toBe(getters.getDropBoxObject().top)
  })
})
