describe('example',()=>{
    it('test case 1',()=>{
        cy.visit('https://www.chase.com/')
        cy.get('.header-navigation__categories--links > :nth-child(2) > .regular-link').click()
        cy.get(':nth-child(1) > .sc-3s7gom-4 > .btn-no-styles').should('contain','banking solution')
    })
})