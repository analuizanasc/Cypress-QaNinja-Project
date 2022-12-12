describe('home page', () => {
  it('passes', () => {
    cy.viewport(1440,900) //definir resolução da janela
    cy.visit('https://buger-eats.vercel.app')
    cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
  })
})