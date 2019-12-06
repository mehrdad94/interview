describe('it should test home page', () => {
  it('Should visit home page', () => {
    cy.url().should('include', '/home')
  })
})
