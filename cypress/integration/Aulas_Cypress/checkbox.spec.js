/// <reference types ="cypress" />

describe('Acessando o site do curso', () => {

    beforeEach('Acessando o menu', () => {
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        cy.title().should('be.equal' ,'Central de Atendimento ao Cliente TAT')

})

it('deve fazer o checked e o unchecked nos campos', () => {
        cy.get('input[type="checkbox"][value="email"]').check()
          .should('be.visible')
          .uncheck()
          .should('not.be.checked')
          //.should('not.be.visible')
        cy.get('input[type="checkbox"][value="phone"]').check()
          .should('be.visible')
})
})