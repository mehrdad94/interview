import { shallowMount } from '@vue/test-utils'
import BaseCircle from '@/components/BaseCircle'

describe('BaseCircle.vue', function () {
  it('should set circle size', function () {
    const props = {
      size: '40px'
    }

    const wrapper = shallowMount(BaseCircle, { context: { props } })

    const circleElm = wrapper.find('.base-circle')

    expect(circleElm.element.style.width).toBe(props.size)
    expect(circleElm.element.style.height).toBe(props.size)
  })
})
