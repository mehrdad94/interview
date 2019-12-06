import { shallowMount } from '@vue/test-utils'
import BaseSquare from '@/components/BaseSquare'

describe('BaseSquare.vue', function () {
  it('should set square size', function () {
    const props = {
      size: '40px'
    }

    const wrapper = shallowMount(BaseSquare, { context: { props } })

    const squareElm = wrapper.find('.base-square')

    expect(squareElm.element.style.width).toBe(props.size)
    expect(squareElm.element.style.height).toBe(props.size)
  })
})
