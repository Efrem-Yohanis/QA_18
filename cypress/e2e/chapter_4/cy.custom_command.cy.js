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
        cy.mylogin(this.data.Username,this.data.Password)
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