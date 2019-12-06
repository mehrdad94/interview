/** Class Custom error. */
class CustomError extends Error {
  /**
   * Assign constructor name to the error.
   * @param {string} message - error message content.
   */
  constructor (message) {
    super(message)
    this.name = this.constructor.name
  }
}

/** Class Required property error, useful when a property is missing. */
export class PropertyRequiredError extends CustomError {
  /**
   * Add additional info to error like property.
   * @param {string} property - missed property name.
   */
  constructor (property) {
    super('No property: ' + property)
    this.property = property
  }
}

/** Class Required element error, useful when an element is missing. */
export class ElementRequiredError extends CustomError {
  /**
   * Add additional info to error like property.
   * @param {string} element - missed element name.
   */
  constructor (element) {
    super('No such element: ' + element)
    this.element = element
  }
}
