/// <reference types ="cypress" />


import { faker } from "@faker-js/faker";

describe('Acessando o site do curso', () => {

    beforeEach('Acessando o menu', () => {
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        cy.title().should('be.equal' ,'Central de Atendimento ao Cliente TAT')
    
})

// Define a constante global emailAleatorio
const emailAleatorio = faker.internet.email();
Cypress.env('emailAleatorio', emailAleatorio);

// Comando customizado para preencher o formulário
it.only('preencherFormulario', () => {
  cy.get('#firstName').type('Maicon Luiz').should('be.visible')
    .get('#lastName').type('Hatada').should('be.visible')
    .get('#email').type(emailAleatorio).should('be.visible')
    .get('#phone').type('090909090').should('be.visible')
    .get('#product').select('Mentoria').should('be.visible')
    .get(':nth-child(3) > input').click().should('be.visible')
    .get('#email-checkbox').check().should('be.visible')
    .get('#open-text-area').type("ffklfhsafhlsfh",{delay:0}).should('be.visible')
    .get('.button').click();
});

// Comando customizado para simular erro em campo obrigatório (email)
it('erroCampoObrigatorioEmail', () => {
  cy.get('#firstName').type('Maicon Luiz').should('be.visible')
    .get('#lastName').type('Hatada').should('be.visible')
    .get('#email').type(emailAleatorio).should('be.visible')
});




// Comando customizado para preencher o formulário
it('preencherFormulario', () => {
  cy.get('#firstName').type('Maicon Luiz').should('be.visible')
    .get('#lastName').type('Hatada').should('be.visible')
    .get('#email').type(emailAleatorio).should('be.visible')
    .get('#phone').type('090909090').should('be.visible')
    .get('#product').select('Mentoria').should('be.visible')
    .get(':nth-child(3) > input').click().should('be.visible')
    .get('#email-checkbox').check().should('be.visible')
    .get('#open-text-area').type("ffklfhsafhlsfh",{delay:0}).should('be.visible')
    .get('.button').click();
});

// Comando customizado para simular erro em campo obrigatório (email)
it('erroCampoObrigatorioEmail', () => {
  cy.get('#firstName').type('Maicon Luiz').should('be.visible')
    .get('#lastName').type('Hatada').should('be.visible')
    .get('#email').type(emailAleatorio).should('be.visible')
});

it('deve apenas me mostrar o email que esta sendo utilizado', () => {
    cy.get('#email').type(emailAleatorio).should('be.visible')
})

})
