describe('Find a Provider', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('Can add new contact', () => {
        cy.visit("https://www.sondermind.com/")
        cy.get('button.btn.pointer').click()
        //cy.contains('a.btn', 'Find a Therapist').click({ force: true })
        // cy.get('#main-navigation').invoke('show')
        //cy.contains('Find a Therapist')
        //  .should('have.length', 1)
        // .and('be.visible')
        cy.get('a.btn-primary').eq(0)
            .invoke('removeAttr', 'target')
            .click({ force: true })
        // .trigger('mousedown')
        // .then(() => {
        //     cy.url().should('include', 'https://start.sondermind.com/')
        // })
        //alternative way for 'Find a Therapist' button 
        // cy.contains('Find a Therapist')//.should('exist')
        //     .should('have.length', 1)
        //     .click({ force: true })

        // cy.contains("I'm still exploring").check()
        // cy.get('buton[type="submit"]').click()

    })
})

