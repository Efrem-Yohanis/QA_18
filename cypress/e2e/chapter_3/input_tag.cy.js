describe('input tag',()=>{
    it('Assertiion on Input tag',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.get('#fname').type('Efrem').should('have.value','Efrem')
        cy.get('#lname').type('jack').should('have.value','jack')
        cy.get('#email').type('efrem@craft.com').should('have.value','efrem@craft.com')
        cy.get('#password').type('password').should('have.value','password')
    
    })
    
})