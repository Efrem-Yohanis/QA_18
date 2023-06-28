describe('Table',()=>{
   it('check number row and colum in table',()=>{
    cy.visit('http://127.0.0.1:5500/project/about.html')
    cy.get('.tb > tr ').should('have.length',6)
    cy.get('.thead > .tr > th').should('have.length',5)
   })
   
   it('check data in cell',()=>{
    cy.visit('http://127.0.0.1:5500/project/about.html')
    cy.get(':nth-child(3) > :nth-child(4)').should('have.text','QA')
   })

   it('all data in table',()=>{
    cy.visit('http://127.0.0.1:5500/project/about.html')
    cy.get('.tb > tr ').each(($row,index,$rows)=>{
        cy.wrap($row).within(()=>{
            cy.get('td').each(($col,index,$cols)=>{
                cy.log($col.text(),index)
            })
        })
    })
   })
})

