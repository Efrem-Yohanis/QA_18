describe('Subject Management',()=>{
    it('chind command',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html') // care about any subject
        cy.get('.as-table') // html table
        .find('tbody>tr')// table body
        .first()  // first row
        .find('td')  // table data
        .first()  // first table data
        .find('button') // button
        .click()  // button


        cy.get('.as-table') // html table
        .find('tbody>tr') // table body
        .first()  // first row
        .find('td')  // table data
        .first()  // first table data
        .find('button') // button

        cy.get('.text-center').contains('Table for test')
        //cy.contains('Table for test')
        //cy.contains()
    })
})