/// <reference types="cypress"/>

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


Given('I visit EBAC Store', () => {
    cy.visit('/minha-conta')
})

When('I register an email {string} and passaword {string} correctly', (email, senha) => {
    cy.login(email, senha)
})

Then('my account page should be visible', () => {
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
})