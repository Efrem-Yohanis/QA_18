describe('home work',()=>{
    it('input_tage + text',()=>{
        cy.visit('https://login.mailchimp.com/signup/')
        cy.xpath("//input[@id='email']").type('efrem@craft.com').should('have.value','efrem@craft.com')
        cy.xpath("//input[@id='new_username']").type('efrem').should('have.value','efrem')
        cy.xpath("//input[@id='new_password']").type('password').should('have.value','password')
    })
})