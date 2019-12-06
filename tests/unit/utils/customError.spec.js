import { PropertyRequiredError } from '@/utils/customError'

describe('custom errors', function () {
  it('should throw missing required prop error', function () {
    const missingProperty = 'fileName'
    const propertyError = new PropertyRequiredError(missingProperty)

    expect(propertyError.name).toBe('PropertyRequiredError')
    expect(propertyError.message).toContain(missingProperty)
  })
})
