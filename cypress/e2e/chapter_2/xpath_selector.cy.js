describe('exmaple for locator',()=>{
    it('xpath locater',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        
        cy.xpath("//input[@id='fname']")
        cy.xpath("//input[@id='lname']")
        cy.xpath("//input[@id='phone']")
        cy.xpath("//input[@id='email']")
        cy.xpath("//input[@id='Male']")
        cy.xpath("//input[@id='Femial']")
        cy.xpath("//input[@id='password']")
        cy.xpath("//select[@id='CountryS']")
        cy.xpath("//input[@id='javaC']")
        cy.xpath("//input[@id='PythonC']")
        cy.xpath("//input[@id='Cpp']")
        cy.xpath("//input[@id='JavaScriptC']")
        cy.xpath("//textarea[@id='CommintTextarea']")
        cy.xpath("//a[@id='button']")
        
    })
})