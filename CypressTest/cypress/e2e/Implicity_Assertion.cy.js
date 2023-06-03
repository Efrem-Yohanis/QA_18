
describe ('implicit assertion', () => {
    it('using should', () =>
         {

            cy.visit('http://127.0.0.1:5500/project/form.html')

             // positave assertion

            cy.url().should('include','project')
            cy.url().should('contain','project')
            cy.url().should('eq','http://127.0.0.1:5500/project/form.html')

             // Short form of should()

           cy.url().should('include','project')
           .should('contain','project')
           .should('eq','http://127.0.0.1:5500/project/form.html')

             // should with and
           cy.url().should('include','project')
           .and('contain','project')
           .and('eq','http://127.0.0.1:5500/project/form.html')
             
           // negative assertion
           cy.url().should('not.include','prsdject')
           .and('not.contain','prsdfoject')
           .and('not.eq','http://127.0.0.1:5500/psdroject/form.html')
           
           // checking visiblity and existance

           cy.get('h1.text-center').should('be.visible')
           .and('exist')

           cy.get('#button').should('be.visible')
           .and('exist')

         // 
         //cy.get('h1.text-center').should('not.equal', 'Jane')
         var data = cy.get('h1.text-center')
         //cy.log(data)
         
        })
})

