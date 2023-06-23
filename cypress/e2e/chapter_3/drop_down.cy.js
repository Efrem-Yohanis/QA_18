describe('dropdown test',()=>{
    it.skip('static drop_down',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.get('#CountryS').select('Ethiopia').should('have.value','Ethiopia')
        cy.get('#CountryS').select('Sudan').should('have.value','Sudan')
        cy.get('#CountryS').select('Keya').should('have.value','Keya')
    })

    it.only('daynamic drop_down',()=>{
        cy.visit('https://www.wikipedia.org')
        cy.get('#searchInput').type('ethio')
        cy.get('a.suggestion-link')
        .should('have.length','6')
        .should('contain','Ethiopia')
        cy.get('.suggestion-title').each(($elm,index,$list)=>{
            if ($elm.text()==='Ethiopia') {
                cy.wrap($elm).click()
                cy.get('.mw-page-title-main').should('have.text','Ethiopia')
              }
        })


    })
    
})