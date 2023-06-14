describe('explicity aassertion',()=>{

    it('expect example',()=>{
        // Expect value Vs Actual value 
        let name = 'craft'
        expect(name).to.equal('craft')   // => pass or fail
        cy.visit('http://127.0.0.1:5500/project1/form.html')

        cy.url().should('eq','http://127.0.0.1:5500/project1/form.html')

        cy.url().then((actual_url)=>{
           const expect_url = 'http://127.0.0.1:5500/project1/form.html'
           
           expect(expect_url).to.equal(actual_url) 

           assert.equal(expect_url,actual_url)
        })


    
       
    })
})