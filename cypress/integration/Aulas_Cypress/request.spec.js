/// <reference types ="cypress" />




describe('Acessando o site do curso', () => {

    beforeEach('Acessando o menu', () => {
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        cy.title().should('be.equal' ,'Central de Atendimento ao Cliente TAT')
    
}) 

it('fazer uma requisição HTTP' , () => {
    cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
      .should(function(response){
         const { status, statusText, body } = response
         expect(status).to.equal(200)
         expect(statusText).to.equal('OK')
         expect(body).to.include('CAC TAT')
      })

      
})

it.only('encontrando o gato escondido', () => {
    cy.get('#cat')
      .invoke('show')
      .should('be.visible')
    cy.get('#title')
      .invoke('text', "CAT TAT")
})

})