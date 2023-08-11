
class NewAccount {
    dadosregistro(email, senha) {
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
    }
}

export default new NewAccount()