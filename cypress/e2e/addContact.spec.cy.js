describe('Add Contact Tests', () => {
    before('Can log in', () => {
        cy.visit('/')
        cy.get('#email').type('sujana.sqa@gmail.com')
        cy.get('#password').type('W2b@HRKsQNLN9!')
        cy.get('#submit').click()

        cy.url().should('include', '/contactList')
    })

    it('Can add new contact', () => {
        let random = Math.floor(Math.random() * 1000)

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
        cy.get('#submit').click()


        cy.contains('Test' + random + ' User').click()
        cy.get('#firstName').should('contain', `Test${random}`)
        cy.get('#lastName').should('contain', 'User')
        cy.get('#birthdate').should('contain', '2000-12-18')
        cy.get('#email').should('contain', 'testuser@gmail.com')
        cy.get('#phone').should('contain', '1234567890')
        cy.get('#street1').should('contain', '456 Madison Street')
        cy.get('#street2').should('contain', 'Cyber Towers')
        cy.get('#city').should('contain', 'TestCity')
        cy.get('#stateProvince').should('contain', 'AA')
        cy.get('#postalCode').should('contain', '12345')
        cy.get('#country').should('contain', 'USA')
    })


})