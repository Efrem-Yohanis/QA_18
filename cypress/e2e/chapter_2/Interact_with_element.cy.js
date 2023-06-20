describe('Interact_with_element',()=>{

    it('google example',()=>{
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('selectorhub')
        cy.get('.FPdoLc > center > .gNO89b').click()

        // cy.get("//a[@href='https://chrome.google.com/webstore/detail/selectorshub/ndgimibanhlabgdgjcpbbndiehljcpfh']//h3[@class='LC20lb MBeuO DKV0Md'][normalize-space()='SelectorsHub']").should('contain','SelectorsHub')
    })
     it.only('intraction with element ',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        
        cy.xpath("//input[@id='fname']").type('Efrem')
        cy.xpath("//input[@id='lname']").type('jhon')
        cy.xpath("//input[@id='phone']").type(+251978665)
        cy.xpath("//input[@id='email']").type('efrem@carft.com')
        cy.xpath("//input[@id='Male']").check()
        // cy.xpath("//input[@id='Femial']").uncheck()
        cy.xpath("//input[@id='password']").type('123456789')
        cy.xpath("//select[@id='CountryS']").select('Ethiopia')
        cy.xpath("//input[@id='javaC']").check()
       // cy.xpath("//input[@id='PythonC']").uncheck()
        cy.xpath("//input[@id='Cpp']").uncheck()
        cy.xpath("//input[@id='JavaScriptC']").uncheck()
        cy.xpath("//textarea[@id='CommintTextarea']").type('this is my comment')
        // cy.xpath("//a[@id='button']").click()
        
    })

});