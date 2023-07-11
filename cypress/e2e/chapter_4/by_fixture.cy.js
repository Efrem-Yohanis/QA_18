describe('hook',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    before(function () {
        cy.fixture('example').then(function (data) {
          this.data = data;
        })
      })
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.data.Username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.data.Password)
        cy.get('.oxd-button').click()
    })
    afterEach(()=>{
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    })
    after(()=>{
       cy.log('Test Finshed')
    })
    it.only('test 1', () => {
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    })
    it('test 2', () => {
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',"Dashboard")
    })

})