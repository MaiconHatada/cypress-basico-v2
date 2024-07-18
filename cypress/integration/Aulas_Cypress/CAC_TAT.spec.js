/// <reference types ="cypress" />


describe('Acessando o site do curso', () => {

    beforeEach('Acessando o menu', () => {
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        cy.title().should('be.equal' ,'Central de Atendimento ao Cliente TAT')
    
})  
it('devo acessar o menu do curso e verificar titulo pagina' , () => {
    // comando para rodar o teste varias vez Cypress._.times (10, () => () {aqui vai o teste})
    Cypress._.times(4 , () => {

    cy.clock()   
    
    cy.preencherFormulario()
            cy.contains('Mensagem enviada com sucesso.')
                .should('be.visible') 

    cy.tick(3000)

    cy.get('.success').should('not.be.visible')
})
                    
    })

it('mensagem de erro ao informar email inválido', () => {
        cy.erroCampoObrigatorioEmail()
            cy.contains('Valide os campos obrigatórios!').should('be.visible')
})

it('Campo telefone vazio quando preenchido valor nao numerico', () =>{
        cy.preencherTelefoneComNumeros()
            
        .should('have.value' , "")
})      

it('deve exibir mesgem de erro sem preencher o campos' , () => {
        cy.get('.button').click()
            .get('.error').should('be.visible')
})

it('pegar campos em seleção suspensa', () => {
    cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
})

it('seleciona produto mentoria por seu valor (value)', () => {
    cy.get('#product')
        .select('Mentoria')
        .should('have.value', 'mentoria')

})

it('deve seleciona Blog pelo seu indice', () => {
     cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
})

it('preenche area de texto usando o comando invoke', () => {
    const longText = Cypress._.repeat('0123456789', 20)

    cy.get('#open-text-area')
      .invoke('val', longText)
      .should( 'have.value', longText)
})

})
