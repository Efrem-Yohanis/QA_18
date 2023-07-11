describe('hook Example',()=>{
    before('',()=>{
        cy.log('This is beforeAll hooks it runs before all test case')
    })

    beforeEach('',()=>{
        cy.log('This is beforeEach hooks it runs before Each test case')
    })
    afterEach('',()=>{
        cy.log('This is afterEach hooks it runs after Each test case')
    })
    after('',()=>{
        cy.log('This is afterEach hooks it runs after All test case')
    })
    it('test case 1',()=>{
        cy.log('test 1')
    })
    it('test case 2',()=>{
        cy.log('test 2')
    })
    it('test case 3',()=>{
        cy.log('test 3')
    })
    it('test case 4',()=>{
        cy.log('test 4')
    })
})