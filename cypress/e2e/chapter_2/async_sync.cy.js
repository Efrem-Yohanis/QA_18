describe('async_sync',()=>{
    it('sync',()=>{
        cy.visit('https://www.google.com/');
        cy.get('.lnXdpd');
        cy.wait(10000).then(()=>{
            console.log('This is javascript code ')
        })
        cy.log('Test Finshed')
        
    })
})