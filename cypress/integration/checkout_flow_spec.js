const baseURL = 'https://staging.plasmavisie.nl/'

describe('Test the checkout flow', function() {

    it('Should navigate to a product, add it to the cart and remove it', function() {
        cy.visit(baseURL)
        
        cy.get('.navigation')
            .should('be.visible')
            .get('ul li.nav-1 a')
            .click()
            .url().should('contain', '/led-televisie')
            .get('.products-grid .product-items .product-item').eq(1)
            .find('a.product').click()
            .url().should('contain', 'qe65q9fn')
            .get('#product-addtocart-button').should('be.visible')
            .click()
            .get('.page.messages [data-bind="html: message.text"] a').should('contain', 'je winkelmand').click()
            .url().should('contain', '/cart') 
            .get('.cart.item .product-item-name a').should('have.attr', 'href').and('contain', 'qe65q9fn')
            .get('[data-role="cart-item-qty"]').clear().type('3').should('have.value', '3').get('button[data-cart-item-update]').click()
            .get('.col.price .price').invoke('text').then(price => {
                cy.get('.col.subtotal .price').should('have.text', price*3)
            })
            //.get('.action-delete').click()
            //.get('.cart-empty').should('be.visible')
    }) 
})  