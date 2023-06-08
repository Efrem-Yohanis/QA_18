describe('Cypress Selector Playground',()=>{
    it('playground',()=>{

        cy.visit('http://127.0.0.1:5500/project1/form.html')

        cy.get('#fname')
        cy.get('#lname')
        cy.get('#phone')
        cy.get('#email')
        cy.get('#Male')
        cy.get('#Femial')
        cy.get('#Femial')
        cy.get('#CountryS')
        cy.get('#javaC')
        cy.get('#javaC')
        cy.get('#JavaScriptC')
        cy.get('#CommintTextarea')
        cy.get('#button')
    })

    it.only('google example',()=>{
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb')
        cy.get('.FPdoLc > center > .gNO89b')
    })
})