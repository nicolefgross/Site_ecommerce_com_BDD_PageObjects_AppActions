/// <reference types="cypress"/>

class itemModify {
    get #cartButton() {return cy.get('.woocommerce-message > .button')} 
    get #quantity() {return cy.get('.quantity > .input-text') }    
    get #cartUpdate() {return cy.get('.pull-right > .btn') } 
    
    modify() {
        this.#cartButton.click()
        this.#quantity.clear().type('2')
        this.#cartUpdate.click()
    }
}

module.exports = new itemModify()