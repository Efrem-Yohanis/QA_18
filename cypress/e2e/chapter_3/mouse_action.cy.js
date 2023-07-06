describe('mouse_action',()=>{
    it('mouse hover',()=>{
        cy.visit('https://demo.opencart.com/')
        // example one
        cy.xpath("//a[normalize-space()='PC (0)']").should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.xpath("//a[normalize-space()='PC (0)']").should('be.visible')
        // example two
        cy.xpath("//a[normalize-space()='Windows (0)']").should('not.be.visible')
        cy.xpath("//a[normalize-space()='Laptops & Notebooks']").trigger('mouseover').click()
        cy.xpath("//a[normalize-space()='Windows (0)']").should('be.visible')
    })
    it('right click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-icon-edit').should('not.be.visible')
        cy.get('.context-menu-one').trigger('contextmenu')
        cy.get('.context-menu-icon-edit').should('be.visible')
    })

    
})