describe('Acessar o Blog do Agi', () => {
  beforeEach(() => {
    // Executa antes de cada teste
    cy.visitaURL('/web-stories/')
  })

  it('Verifica Título da pagina', () => {
    cy.title().should('include', 'Story - Blog do Agi')
  })
})
