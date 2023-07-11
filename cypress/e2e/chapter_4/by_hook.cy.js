describe('example',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
     
        return false
        });
    before('beforall',()=>{
        cy.fixture('newdata').then(function(data) {
            this.mydata = data
       })
    })

    beforeEach('',()=>{
        // visit
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       // login
       cy.mylogin(this.mydata.Username,this.mydata.Password)
    })
    afterEach('',()=>{
        // logout
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    })
    after('',()=>{
        cy.log('test finshed')
    })
    it.only('test case 1',()=>{
        //assertion
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })

    it('test case 2',()=>{
        //assertion
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
    })
})