describe('css selector',()=>{

// input#fname
// input.form-control
// input[name='firatname']
// input.form-control[name='firatname']


// tagname id optinal

// #fname
// .form-control
// [name='firstname']
// .form-control[name='firstname']
    it('get command',()=>{
       
        cy.visit('http://127.0.0.1:5500/project1/form.html') // the first step

        //1. with tag
        cy.get('input#fname')  // selecting by id
        cy.get('input.form-control')  // selecting by class 
        cy.get("input[name='firstname']")  // selecting by attr
        cy.get("input.form-control[name='firstname']") // selecting by atter and class

        //2. with out tagname
        cy.get('#fname')  // selecting by id
        cy.get('.form-control')  // selecting by class 
        cy.get("[name='firstname']")  // selecting by attr
        cy.get(".form-control[name='firstname']") // selecting by atter and class

       // name="firstname"
       //class="form-control"
       //id="fname"

    })
    it('use of tag',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html')
        cy.get('input#lname')
        cy.get('p#lname')

        //<input id="lname">
    })

    it('google ',()=>{
        cy.visit('https://www.google.com/')
        cy.get('.gNO89b')
        cy.get("input[name='btnK']")
        cy.get(".gNO89b[name='btnK']")

        //<input class="gNO89b" value="Google Search" aria-label="Google Search" name="btnK" role="button" tabindex="0" type="submit" data-ved="0ahUKEwjssNCcg7D_AhVtVaQEHawnBqgQ4dUDCBE">
    })

    //2. chined command

    it('Chained Command',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.get('.text').find('h1')
        cy.get('.text').contains('First Page')
        cy.contains('Registration Form')  // 
    })

    // 3. time out example

    it('tiem out example',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.get('.text').contains('First Page',{timeout: 10000})
    })

    // eq() command
    it.only('eq command',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.get('.form-control').eq(5)
    })
});