describe('hidden_element',()=>{
    it.only('hidden',()=>{
        cy.visit('https://www.amazon.com/')
        cy.xpath("//span[normalize-space()='Account & Lists']").trigger('mouseover').click()
        cy.xpath("//div[@id='nav-flyout-ya-signin']//span[@class='nav-action-inner'][normalize-space()='Sign in']").should('be.visible')
        
        // cy.get('#nav-flyout-ya-signin').invoke('show').should('be.visible')
        // //cy.xpath("//div[@id='nav-flyout-ya-signin']//span[@class='nav-action-inner'][normalize-space()='Sign in']").invoke('show').should('be.visible')
        // //cy.contains('sign').click({force:true})
        // //.invoke('show')
        // //cy

        // element to be visible ..... ??

    

    })

    it.skip('hidden',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').should('be.visible')
    })
})