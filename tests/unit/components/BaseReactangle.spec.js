import { shallowMount } from '@vue/test-utils'
import BaseRectangle from '@/components/BaseRectangle'

describe('BaseRectangle.vue', function () {
  it('should set rectangle size', function () {
    const props = {
      width: '40px',
      height: '90px'
    }

    const wrapper = shallowMount(BaseRectangle, { context: { props } })

    const rectangleElm = wrapper.find('.rectangle')

    expect(rectangleElm.element.style.width).toBe(props.width)
    expect(rectangleElm.element.style.height).toBe(props.height)
  })
})
