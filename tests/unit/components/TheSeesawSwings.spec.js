import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TheSeesawSwings from '@/components/TheSeesawSwings'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('TheSeesawSwings.vue', function () {
  let store
  let getters
  beforeEach(() => {
    getters = {
      getSwingObjects: () => ([]),
      getSwingAngle: () => (30)
    }

    store = new Vuex.Store({
      getters
    })
  })

  it('should render without error', function () {
    shallowMount(TheSeesawSwings, { localVue, store })
  })
})
