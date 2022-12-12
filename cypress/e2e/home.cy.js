describe('home page', () => {
  it('passes', () => {
    //Uma forma de definir resolução da janela:
    //cy.viewport(1440,900) // mas não precisa pois já foi configurado no config.js

    //Uma forma de definir url inicial:
    //cy.visit('https://buger-eats.vercel.app') //já foi configurado no config.js
    //Outra forma de definir url inicial:
    cy.visit('')
    cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
  })
})