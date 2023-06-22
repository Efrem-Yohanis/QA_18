describe('hidden_element',()=>{
    it('hidden',()=>{
        cy.visit('https://www.amazon.com/')
        cy.xpath("//div[@id='nav-flyout-ya-signin']//span[@class='nav-action-inner'][normalize-space()='Sign in']").invoke('show')
        cy.contains('sign').click({force:true})
        //.invoke('show')
        //cy
    })
})