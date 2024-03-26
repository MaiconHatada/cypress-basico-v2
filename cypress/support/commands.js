Cypress.Commands.add('preencherFormulario', () => {
    cy.get('#firstName').type('Maicon Luiz').should('be.visible')
    .get('#lastName').type('Hatada').should('be.visible')
      .get('#email').type('maicon@gmail.com').should('be.visible')
        .get('#phone').type('090909090').should('be.visible')
          .get('#product').select('Mentoria').should('be.visible')
            .get(':nth-child(3) > input').click().should('be.visible')
              .get('#email-checkbox').check().should('be.visible')
                .get('#open-text-area').type("ffklfhsafhlsfh",{delay:0}).should('be.visible')
                  .get('.button').click()

})

Cypress.Commands.add('erroCampoObrigatorioEmail', () => {
    cy.get('#firstName').type('Maicon Luiz').should('be.visible')
            .get('#lastName').type('Hatada').should('be.visible')
              .get('#email').type('maicon.com').should('be.visible')
                .get('#phone').type('090909090').should('be.visible')
                  .get('#product').select('Mentoria').should('be.visible')
                    .get(':nth-child(3) > input').click().should('be.visible')
                      .get('#email-checkbox').check().should('be.visible')
                         .get('#open-text-area').type("ffklfhsafhlsfh",{delay:10}).should('be.visible')
                           .get('.button').click()
})

Cypress.Commands.add('preencherTelefoneComNumeros',() => {
    cy.get('#firstName').type('Maicon Luiz').should('be.visible')
            .get('#lastName').type('Hatada').should('be.visible')
              .get('#email').type('maicon@gmail.com').should('be.visible')
                .get('#phone').type('iojiiih')
                  .should('have.value' , "")
})