///<reference types = 'cypress'/>
describe('Delete Contact Tests', () => {
    //we are adding a contact here before deleting it as we want our tests to be self contained i.e., not to depend on other tests.
    //For eg., if it is dependant if there is any server hiccup and the addContact test fails then this test also would fail.
    it('Can add new contact', () => {
        cy.login()

        let random = Math.floor(Math.random() * 1000)
        cy.addContact(random)

        //click on the user inorder to go to 'Contact Details' page
        cy.contains('Test' + random + ' User').click()

        cy.deleteContact()
        //Assertion if the contact is deleted
        cy.get('tr.contactTableBodyRow').contains('Test' + random + ' User').should('not.exist')
    })
})