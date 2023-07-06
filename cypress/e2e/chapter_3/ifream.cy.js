
 import 'cypress-iframe'

describe('ifream',()=>{
    it('test ifream',()=>{
        cy.visit('http://127.0.0.1:5500/project/new.html')
        cy.frameLoaded('iframe');
        cy.iframe().contains('Topic 1').then((t)=>{
                   const actual_text = t.text()
                   const expect_text = "Topic 1"
                   expect(expect_text).to.equal(actual_text)
        })
    })
})



