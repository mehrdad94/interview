import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TheHeader from '@/components/TheHeader'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('TheHeader.vue', function () {
  let store
  let actions
  let state = { isPaused: false }

  beforeEach(() => {
    actions = {
      resumeDropBoxObjectFalling: jest.fn()
    }
    store = new Vuex.Store({
      state,
      actions
    })
  })

  it('should switch between Resume and Pause buttons', function () {
    const wrap = shallowMount(TheHeader, { localVue, store })

    const resumeBtn = wrap.find('.btn-resume')
    const pauseBtn = wrap.find('.btn-pause')

    expect(resumeBtn.exists()).toBeFalsy()
    expect(pauseBtn.exists()).toBeTruthy()
  })
})
