describe('file upload',()=>{
    it('should upload a file', () => {
        //implicite assertion
            cy.visit('https://the-internet.herokuapp.com/upload')
            const fileName = 'tb.png';
            cy.get('#file-upload').attachFile(fileName)
            cy.get('#file-submit').click()
            cy.get('#uploaded-files').should('contain', 'tb.png')
        
          });
          //explicite assertion
          it('expect upload a file', () => {
            cy.visit('https://the-internet.herokuapp.com/upload')
            const fileName = 'tb.png';
            cy.get('#file-upload').attachFile(fileName)
            cy.get('#file-submit').click()
            cy.get('#uploaded-files').then(($sub)=>{
                    const upload_file=$sub.text()
                    expect(upload_file).to.contain('tb.png')
            }) 
          })
})