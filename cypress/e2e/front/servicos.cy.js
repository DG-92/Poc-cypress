describe('Acessar Serviços', () => {
  beforeEach(() => {
    // Executa antes de cada teste
    cy.visitaURL('/servicos/')
  })

    it('Verifica Título da pagina', () => {
        cy.validaTituloDaPagina('Artigos sobre Serviços Produzidos pelo Agibank')
    })


    it('Verifica noticia do dia 06/10/2025',()=> {
        cy.validaFrase('Portal do Servidor: quais são os serviços e como acessar').click()
        cy.validaFrase('Se você é servidor público, já deve ter ouvido falar no portal do servidor.')
    })


})