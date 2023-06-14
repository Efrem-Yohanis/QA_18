describe('closures example',()=>{
    it('',()=>{
        cy.visit('https://www.google.com')
        cy.get('#APjFqb').type('cypress tutorial')

        // this won't work the way what we think is dose
        // const btn = cy.get('.FPdoLc > center > .gNO89b')
        // const txt=btn.val()
       
        cy.get('.FPdoLc > center > .gNO89b').then(($btn) => {
            const t = $btn.val()
            cy.log(t)
            console.log(t)
        })
        
        
    })
})