describe('check_radio',()=>{
    it('radio_btn',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        //---------------------------------------------//
        cy.get('#Male').check().should('be.checked')
        cy.get('#Femial').should('not.be.checked')
        //--------------------------------------------//
        cy.get('#Femial').check().should('be.checked')
        cy.get('#Male').should('not.be.checked')
    })

    it('Check_box',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        //-----------------------------------------------------//
        cy.get('#javaC').check().should('be.checked')
        cy.get('#PythonC').check().should('be.checked')
        cy.get('#Cpp').check().should('be.checked')
        cy.get('#JavaScriptC').check().should('be.checked')
        //----------------------------------------------------//
        cy.get('#javaC').uncheck().should('not.be.checked')
        cy.get('#PythonC').uncheck().should('not.be.checked')
        cy.get('#Cpp').uncheck().should('not.be.checked')
        cy.get('#JavaScriptC').uncheck().should('not.be.checked')
    })
})