import Login from "../../support/PageObject/pageclass1"
describe('hook', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    
    it.only('test 1', () => {
        // visit
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        //login
        const login = new Login()
        login.getUsename()
        login.getPassword()
        login.getLoginbtn()
        
        cy.wait(10000)
        cy.screenshot('this is after login')
        
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
        const login = new Login()
        login.getUsename()
        login.getPassword()
        login.getLoginbtn()

        //assertion
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',"Dashboard")

        //logout
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    })

})