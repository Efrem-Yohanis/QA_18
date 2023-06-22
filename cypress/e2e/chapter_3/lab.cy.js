describe('lab',()=>{
    it('test',()=>{
        cy.visit('http://127.0.0.1:5500/project/registration.html')
        cy.get(':nth-child(2) > #iun').type('Efrem').should('have.value','Efrem')
        cy.get(':nth-child(3) > #iun').type('Yohanis').should('have.value','Yohanis')
        cy.get(':nth-child(4) > #iun').type('efrem@craft.com').should('have.value','efrem@craft.com')
        cy.get(':nth-child(5) > #iun').type('caft').should('have.value','caft')
        cy.get(':nth-child(6) > .data').type('123456').should('have.value','123456')
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')
        cy.get('#Regular').check().should('be.checked')
        cy.get('#Speasal').check().should('be.checked')
        // cy.get(':nth-child(19) > .data').type('2023/01/01').should('have.value','2023/01/10')
        cy.get('#cars').select('QA').should('have.value','QA')
        
    })
})