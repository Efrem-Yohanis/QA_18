describe('common Cypress Assertion',()=>{
    it('Length check',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html') 
        cy.get('.as-table').find('tbody>tr').first().as('tr').should('not.have.length','3')
        cy.get('@tr').find('td').should('have.length','2')
    })
    it('class check',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html')
        cy.get('.as-table').find('tbody>tr').first().find('td').first().find('button').should('have.class','btn-primary')
    })
    it('test contain check',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html')
        cy.get('.text-center').should('contain','Table for test')
        cy.get('.as-table').find('tbody>tr').first().find('td').first().find('button').should('contain','Change')
    })
    it('Visibility check',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html')
        cy.get('.text-center').should('be.visible')
    })
    it('exist check',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html')
        cy.get('.text-center').should('exist')
    })

    it('value check',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.get('#fname').should('have.value','Efrem').debug()

    })
    
})