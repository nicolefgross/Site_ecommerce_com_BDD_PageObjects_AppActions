/// <reference types="cypress"/>

const  NewAccount = require('../support/pageObjects/novaConta')
const  checkout_data  = require('../fixtures/checkout_data.json')
const  checkoutPage  = require('../support/AppAction/checkout.page')
import {faker} from '@faker-js/faker'


describe('Fluxo no ecommerce', () => {
    const email = faker.internet.email()
    const senha = faker.internet.password()

    beforeEach(() => {
        cy.visit('/minha-conta')
    })
    
    it('should create and account successfully - pageObjects', () => {
        NewAccount.dadosregistro(email, senha)     

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    });

    it('should execute checkout successfully - AppActions', () => {
        cy.visit('/minha-conta')
        cy.get('#username').type(email)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3680 > .product-block').click()
        cy.get('.button-variable-item-XL').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        checkoutPage.checkout(checkout_data[0].name, checkout_data[0].lastname,checkout_data[0].company, checkout_data[0].country, checkout_data[0].address1, checkout_data[0].address2, checkout_data[0].city, checkout_data[0].state, checkout_data[0].postcode, checkout_data[0].phone)
        cy.get('.woocommerce-notice').should('have.text', 'Obrigado. Seu pedido foi recebido.')
    });    
});