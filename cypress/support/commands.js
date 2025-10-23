// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('validaTituloDaPagina',(tituloPagina)=>{
    cy.title().should('include', tituloPagina)
})

Cypress.Commands.add('visitaURL',(path)=>{
    cy.visit(path)
})

Cypress.Commands.add('validaFrase',(frase)=>{
    cy.contains(frase).should('be.visible')
})



Cypress.Commands.add('lupaDePesquisa', (escopoDePesquisa) => { // Clica no ícone da lupa (ajuste conforme o seletor real) 
//
  cy.get('span.ast-icon span.ast-inline-flex svg').click(); 
  cy.get('#search-field') .invoke('attr', 'style', 'visibility: visible')
    .type(escopoDePesquisa + '{enter}', { force: true }); // corrige o {enter}

})