describe('Test Alert',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.once("fail", (err) =>
   {
    return false;
   });

    it.only('noraml Alert',()=>{
        cy.visit("http://127.0.0.1:5500/project/login.html?")
        cy.get('.btn > a').click()
        cy.on('window:alert',(myalert)=>{
            expect(myalert).to.contains(' Hello! You are succesfully login')
        })
    })
    it('confirm Alert OK btn',()=>{
        cy.visit('http://127.0.0.1:5500/project/about.html')
        cy.get('button > .bi-person-x').click()
        cy.on('window:confirm',(confAlert)=>{
            expect(confAlert).to.contains('Are you sure to delete the student info')
        })
        cy.get('#result').should('have.text','You pressed OK!')
    })

    it('confirm Alert OK C',()=>{
        cy.visit('http://127.0.0.1:5500/project/about.html')
        cy.get('button > .bi-person-x').click()
        cy.on('window:confirm',()=>false)
        cy.get('#result').should('have.text','You canceled!')
    })
it('prompt Alert',()=>{
    cy.visit('http://127.0.0.1:5500/project/home.html')
    cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('Efrem')
    })
    cy.get(':nth-child(1) > a > img').click()
    cy.xpath("//span[@id='ans ']").should('have.text','Efrem')
})
})