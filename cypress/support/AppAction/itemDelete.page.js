/// <reference types="cypress"/>

class itemDelete {
    get #cartButton() {return cy.get('.woocommerce-message > .button')} 
    get #deleteButton() { return cy.get('.remove > .fa')}

    delete() {
        this.#cartButton.click()
        this.#deleteButton.click()
    }
}

module.exports = new itemDelete()