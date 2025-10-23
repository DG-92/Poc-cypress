describe('Acessar Serviços', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    
    // Executa antes de cada teste
    cy.visitaURL('/', { failOnStatusCode: false })
  })

    it('000 - Verifica Título da pagina', () => {
      cy.validaTituloDaPagina('Agi Blog | Tudo sobre empréstimo e educação financeira')
    })

    it('001 - Busca de notícia com sucesso',()=>{
      cy.lupaDePesquisa('Nossos avanços em testes de transferências')
      cy.validaFrase('Resultados encontrados para: Nossos avanços em testes de transferências')
      cy.validaFrase('Nossos avanços em testes de transferências interbancárias via Drex. Veja mais detalhes!')
    })
    
    /it('002 - Busca de notícia sem sucesso',()=>{
      cy.lupaDePesquisa('Teste Inexistente')
      cy.validaFrase('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
    })
});

