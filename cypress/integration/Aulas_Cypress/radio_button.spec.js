/// <reference types ="cypress" />



describe('Acessando o site do curso', () => {

    beforeEach('Acessando o menu', () => {
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        cy.title().should('be.equal' ,'Central de Atendimento ao Cliente TAT')

})
it('deve marcar radio button tipo atendimento feddback .check', () =>{
        cy.get('input[type="radio"][value="feedback"]').check() 
        // forma de pegar usando type e value input[value="feedback"] ou da chamada
            .should('have.value','feedback')
})

it('marcar cada tipo de atendimento', () => {
        cy.get('input[type="radio"]')
          .should('have.length', 3)
          .each(function($radio) {
            cy.wrap($radio).check()
              .should('be.checked')
          })
})

it('como lidar com testes que abrem em outra aba' , () => {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
})

it('como lidar com testes que abrem em outra aba clicando no link' , () => {
  cy.get('#privacy a').invoke('removeAttr', 'target').click()

  cy.contains('Talking About Testing').should('be.visible')
})




})  