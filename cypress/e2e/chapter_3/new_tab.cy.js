describe('new tab',()=>{
    it('example for tab',()=>{
        cy.visit('http://127.0.0.1:5500/project/login.html')
        cy.get('.btn > a').invoke('removeAttr','target').click()
        cy.url().should('eq','http://127.0.0.1:5500/project/home.html')
        cy.go('back')
    })
})