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

Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('#email').type('sujana.sqa@gmail.com')
    cy.get('#password').type('W2b@HRKsQNLN9!')
    cy.get('#submit').click()
    //Assertion on the url
    cy.url().should('include', '/contactList')
})

Cypress.Commands.add('addContact', (random) => {
    cy.get('#add-contact').click()
    cy.url().should('include', '/addContact')

    cy.get('#firstName').type('Test' + random)
    cy.get('#lastName').type('User')
    cy.get('#birthdate').type('2000-12-18')
    cy.get('#email').type('testuser@gmail.com')
    cy.get('#phone').type('1234567890')
    cy.get('#street1').type('456 Madison Street')
    cy.get('#street2').type('Cyber Towers')
    cy.get('#city').type('TestCity')
    cy.get('#stateProvince').type('AA')
    cy.get('#postalCode').type('12345')
    cy.get('#country').type('USA')
    //cy.get('#submit').click()

    //Alternative command to submit the form - using cy.submit()
    cy.get('#add-contact').submit()
})

Cypress.Commands.add('deleteContact', () => {
    cy.get('#delete').click()
    //There is a pop-up that gets displayed to confirm the delete action
    //This pop-up appears only while deleting it manually. So, to make sure that the tests are not flaky we are clicking on the confirm button
    cy.on('window:confirm', () => true)
})
