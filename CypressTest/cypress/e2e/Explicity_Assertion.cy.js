
describe ('Explicit Assertion', () => {
        
         it('expext example', () =>
                {
                    // Expected Value Vs Actual Value 
                    // expect('Actual Value').to.be.equal('Expected Value')
                    let name = 'Efrem'  
                    expect(name).to.equal('Efrem')


                    cy.visit('http://127.0.0.1:5500/project/form.html')
                   
                    let asas= cy.get('h1.text-center')
                    expect(asas).to.exist

                    cy.url().then(url => {
                       let myurl=url
                       cy.log(myurl)
                        expect(url).to.eq('http://127.0.0.1:5500/project/form.html');
                      });

                      cy.get('#button').then((mybtn)=>{
                        
                        expect(mybtn).to.be.visible
                      })

                      
                   //These commands return a chainable type, not primitive values like strings, 
                   // so assigning them to variables will require further action to 'extract' the string.
                   //In order to get the url string, you need to do
                   //cy.url().then(urlString => //do whatever)

                   cy.get('#fname').type('Efrem')
                   cy.get('#fname').then(($username)=>{
                        let value = $username.val();
                        cy.log(value)
                        expect('Efrem').to.equal(value)

                    //cy.get('#fname').invoke('value')

                   })
            


               })

               it('assert example', () =>
               {
                   // Expected Value Vs Actual Value 
                   // assert.equal('Actual Value','Expected Value')
                    assert

                   let name = 'Efrem'  
                   assert(name,'Efrem')


                   cy.visit('http://127.0.0.1:5500/project/form.html')
                  
                   let asas= cy.get('h1.text-center')
                   //assert.to.exist(asas)
                   assert.isOk(asas)

                   cy.url().then(url => {
                      let myurl=url
                      cy.log(myurl)
                       assert.equal(url,'http://127.0.0.1:5500/project/form.html')
                       assert.typeOf("user1", 'string')
                    });

                     cy.get('#button').then((mybtn)=>{
                        assert.isOk(mybtn)
                     })

                     
                  //These commands return a chainable type, not primitive values like strings, 
                  // so assigning them to variables will require further action to 'extract' the string.
                  //In order to get the url string, you need to do
                  //cy.url().then(urlString => //do whatever)

                  cy.get('#fname').type('Efrem')
                  cy.get('#fname').then(($username)=>{
                       let value = $username.val();
                       cy.log(value)
                       assert(value,'Efrem')

                   //cy.get('#fname').invoke('value')

                  })
           


              })
               
    })
  