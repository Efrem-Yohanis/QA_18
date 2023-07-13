class Login{

    getUsename() {
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    }
    getPassword() {
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    }
    getLoginbtn()
    {
        return cy.get('.oxd-button').click()
    }
}
export default Login