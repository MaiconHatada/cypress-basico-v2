/// <reference types ="cypress" />

describe('Acessando o site do curso', () => {

    beforeEach('Acessando o menu', () => {
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        cy.title().should('be.equal' ,'Central de Atendimento ao Cliente TAT')

})

it('deve fazer o upload', () => {
        cy.get('input[type="file"]')
          .should('not.have.value')
          .selectFile('cypress/fixtures/example.json')
          .should(function($input) {
           expect($input[0].files[0].name).to.equal('example.json')
          })
        
})

it('simula upload arquivo utilizando dragon and drop' , () => {
    cy.get('input[type="file"]')
          .should('not.have.value')
          .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
          .should(function($input) {
           expect($input[0].files[0].name).to.equal('example.json')
          })
})

it.only('seleciona um arquivo ao qual foi dado um alias as', () => {
    cy.fixture('example.json').as('samplefile')
    cy.get('input[type="file"]')
          .selectFile('@samplefile',)  
          .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
           })
})
})