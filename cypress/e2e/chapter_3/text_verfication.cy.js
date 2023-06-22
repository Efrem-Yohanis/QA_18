describe('text_verfication',()=>{
    it('This is for text verfication by implicit',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.get('h1.text-center').should('exist')
        .and('be.visible')
        .and('contain','First Page')
        .and('have.text','First Page')


    })

    it('This is for text verfication by explicit ',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.get('h1.text-center').then(($sub)=>{
            const a =$sub.text()
            expect(a).to.contain('First Page')
        })


    })
})