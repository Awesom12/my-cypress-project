describe('Add Contact Tests', () => {
    before('Can log in', () => {
        cy.login()
    })

    it('Can add new contact', () => {
        let random = Math.floor(Math.random() * 1000)
        cy.addContact(random)

        //click on the user inorder to go to 'Contact Details' page
        cy.contains('Test' + random + ' User').click()

        //Assertions
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

        //We want to clean up after the test, so we are deleting the contact
        cy.deleteContact()
        //We don't have to assert on delete as we are doing it in our delete contact test
    })
})