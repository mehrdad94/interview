import { randomArrayItems, randomBetweenRange, uuid, addPixels } from '@/utils/helpers'

describe('helpers functions', function () {
  it('should get random item from an array', function () {
    const array = [1, 2, 3, 4]

    const select = randomArrayItems(array)

    expect(array).toContain(select)
  })

  it('should generate random id between two numbers', function () {
    expect(randomBetweenRange(0, 10)).toBeLessThanOrEqual(10)
  })

  it('should generate an uuid', function () {
    expect(uuid()).toBeTruthy()
  })

  it('should add pixels to numeric properties of an object', function () {
    const data = {
      top: 20
    }
    expect(addPixels(data).top).toEqual(data.top + 'px')
  })
})
