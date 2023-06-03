describe('Test Suit1',()=>{
    it('Test Case1',()=>{
       
      cy.log("this is arrow function")
    })

    it('Test Case2',function (){
       
        cy.log("this is nameless function")
      })
});

describe('Test Suit2',function (){
    it('Test Case1', ()=>{
       
      cy.log("this is arrow function")
    })
    it('Test Case2',function (){
       
        cy.log("this is nameless function")
      })
});
