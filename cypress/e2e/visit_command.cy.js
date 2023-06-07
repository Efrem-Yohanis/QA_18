describe('visit_command',()=>{
     // 1. open google 
     it.skip('visit google',()=>{
     //test step
     cy.visit('http://www.google.com')
     });
    
      // 2. open Craft websit 
     it.skip('visit craft websit',()=>{
         cy.visit('https://craftknowledge.net/')
     });

     // 3. open local project
     it.skip('visit craft websit',()=>{
         cy.visit('http://127.0.0.1:5500/project/home.html')
     });

    //4.  baseUrl concept

    it.skip('home ',()=>{
         cy.visit('home');
        
     });

   //5. Changing BaseUrl While Testing
    it('Changing BaseUrl While Testing',{baseUrl: 'http://127.0.0.1:5500/project/'},()=>{
            cy.visit('home.html')
    });
    

    
})