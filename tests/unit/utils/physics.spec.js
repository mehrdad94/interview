import { hasOverlap } from '@/utils/physics'

describe('physics.js', function () {
  it('should detect elements overlap', function () {
    const clientRect1 = {
      bottom: 460,
      left: 282.5,
      right: 958.5,
      top: 167
    }

    const clientRect2 = {
      bottom: 266,
      left: 282.5,
      right: 958.5,
      top: 167
    }
    expect(hasOverlap(clientRect1, clientRect2)).toBeTruthy()
  })
})
