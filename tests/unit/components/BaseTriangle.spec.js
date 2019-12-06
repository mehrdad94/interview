import { shallowMount } from '@vue/test-utils'
import BaseTriangle from '@/components/BaseTriangle'

describe('BaseTriangle.vue', function () {
  it('should set triangle size', function () {
    const props = {
      size: '40px'
    }

    const wrapper = shallowMount(BaseTriangle, { context: { props } })

    const triangleElm = wrapper.find('.base-triangle')

    expect(triangleElm.element.style.borderWidth).toBe(props.size)
  })
})
