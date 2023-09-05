
class itemAdd {
    dadosAdicao() {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3680 > .product-block').click()
        cy.get('.button-variable-item-XL').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new itemAdd()