describe('assertion',()=>{
    it('rb',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.xpath("//input[@id='Femial']")
        .check()
        .should("be.checked")
        cy.get('#Male').should('not.be.checked')

        
    })
})