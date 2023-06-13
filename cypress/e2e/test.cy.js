describe('test',()=>{

    it('test google',()=>{

        cy.visit('https://www.googel.com')
        cy.get('#APjFqb').type("cypress tutorial")
        cy.get("input[name='btnK']",{multiple: true }).click()
    })
});