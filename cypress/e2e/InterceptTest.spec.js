/// <reference types="cypress"/>

const NewAccount = require('../support/pageObjects/novaConta')
const Login = require('../support/pageObjects/login')
const itemAdd = require('../support/pageObjects/itemAdd')
import {faker} from '@faker-js/faker'
import itemModifyPage from '../support/AppAction/itemModify.page'
import itemDeletePage from '../support/AppAction/itemDelete.page'

describe('Using intercept in EBAC Shop', () => {
    const email = faker.internet.email()
    const senha = faker.internet.password()

    beforeEach(() => {
        cy.visit('/minha-conta')
    })

    it('should create and account successfully - pageObjects', () => {
        NewAccount.dadosregistro(email, senha)     
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    });

    it('should add and modify an item sucessfully', () => {
        Login.dadosLogin(email, senha)
        cy.intercept('POST', '/wp-admin/admin-ajax*', {
            statusCode: 200      
        }).as('itemAdded')

        cy.intercept('POST', '/carrinho/', {
            statusCode: 302,
            body: {
                cart: 'e09ae40440baa81b55589c9c2f37c0c3',
                woocommerceCartNonce: '1a40d1b99f'
            }
        }).as('itemModified')

        
        itemAdd.dadosAdicao()
        itemModifyPage.modify()

        cy.wait('@itemAdded')
        cy.wait('@itemModified')

    });

    it('should delete and item from the chart', () => {
        Login.dadosLogin(email, senha)  
        cy.intercept('GET', '/carrinho/').as('itemExcluded')
        
       
        itemAdd.dadosAdicao()
        itemDeletePage.delete()

        cy.wait('@itemExcluded')
        cy.get('.cart-empty').should('have.text', 'Seu carrinho está vazio.')
    });
})