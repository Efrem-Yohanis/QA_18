describe('dropdown test',()=>{
    it('static drop_down',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.get('#CountryS').select('Ethiopia').should('have.value','Ethiopia')
        cy.get('#CountryS').select('Sudan').should('have.value','Sudan')
        cy.get('#CountryS').select('Keya').should('have.value','Keya')
    })
    
})