
describe ('google search', () => {
    it('test case', () =>
         {
          //     cy.visit('https://www.google.com/')
          //     cy.visit('http://127.0.0.1:5500/project/form.html')
              let aa = cy.visit('http://127.0.0.1:5500/project/form.html')

              //log{specwindow: <window>, chainerid: ch-https://www.google.com-21}
              let t = cy.title()
              cy.log(t)
        })
})

