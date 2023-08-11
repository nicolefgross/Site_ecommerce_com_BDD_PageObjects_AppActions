/// <reference types="cypress"/>

import { checkout_data } from "../../fixtures/checkout_data.json";

class checkoutPage {
    get #name() { return cy.get('#billing_first_name') }
    get #lastname() { return cy.get('#billing_last_name') }
    get #company() {return cy.get('#billing_company')   }
    get #country() {return cy.get('#select2-billing_country-container')}
    get #address1() {return cy.get('#billing_address_1')}
    get #address2() {return cy.get('#billing_address_2')}
    get #city() {return cy.get('#billing_city')}
    get #state() {return cy.get('#select2-billing_state-container')}
    get #postcode() {return cy.get('#billing_postcode')}
    get #phone() {return cy.get('#billing_phone')}
    get #checkbox() {return cy.get('[type="checkbox"]') } //.check()
    get #order() {return cy.get('#place_order')}
   
    checkout(name, lastname, company, country, address1, address2, city, state, postcode, phone) {
        this.#name.type(name)
        this.#lastname.type(lastname)
        this.#company.type(company)
        this.#country.click().type(country).get('[aria-selected="true"]').click()
        this.#address1.type(address1)
        this.#address2.type(address2)
        this.#city.type(city)
        this.#state.click().type(state).get('[aria-selected="true"]').click()
        this.#postcode.type(postcode)
        this.#phone.type(phone)
        this.#checkbox.check({force: true})
        this.#order.click()
    }
}

module.exports = new checkoutPage()