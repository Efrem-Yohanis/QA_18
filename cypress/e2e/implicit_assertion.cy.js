describe('implicit assertion',()=>{
    it.skip('example',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html') // care about any subject
        cy.get('.as-table') // html table
        .find('tbody>tr').should('have.length',2)// table body
        .first().should('have.length',1) // first row
        .find('td')  // table data
        .first()  // first table data
        .find('button') // button
        .click()  // button
    })
    // 1. should with positave example
    it('using should',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.url().should('include','127.0.0.1') // url 
        cy.url().should('contain','project')
        cy.url().should('eq','http://127.0.0.1:5500/project1/form.html')

    })
    // 2. short form of should
    it('short form using should',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        .should('include','127.0.0.1') // url 
        .should('contain','project')
        .should('eq','http://127.0.0.1:5500/project1/form.html')

    })
    // 3. should with and
    it('short form using should',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.url().should('include','127.0.0.1') // url 
        .and('contain','project')
        .and('eq','http://127.0.0.1:5500/project1/form.html')

    })

    // 4. should with nagative example
    it.skip('using should',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.url().should('not.include','127.0.0.1') // url 
        cy.url().should('not.contain','project')
        cy.url().should('not.eq','http://127.0.0.1:5500/project1/form.html')

    })

    // 5. check visiblity snd existance

    it.only('existance',()=>{

        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.get('h1.text-center').should('be.visible')
        cy.get('h3.text-center').should('exist')
    })


})