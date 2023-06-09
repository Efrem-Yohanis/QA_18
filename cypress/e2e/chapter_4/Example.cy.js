describe('hook', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    
    it.only('test 1', () => {
        // visit
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        //login
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        
        //asertion
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        
        //logout
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    })

    it('test 2', () => {
        //visit
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //login
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        //assertion
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',"Dashboard")

        //logout
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    })

})