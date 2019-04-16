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
            .wait(2000) 
            .click()           
            .get('.page.messages [data-bind="html: message.text"] a').should('contain', 'je winkelmand').click()
            .url().should('contain', '/cart') 
            // .get('.cart.item .product-item-name a').should('have.attr', 'href').and('contain', 'qe65q9fn')
            // .get('[data-role="cart-item-qty"]').clear().type('3').get('button[data-cart-item-update]').click()
            // .get('[data-role="cart-item-qty"]').should('have.value', '3')
            // .get('.cart.item .photo.image').should('have.attr', 'src').should('contain', '/media/catalog/')
            .get('.minicart-wrapper .showcart').click()
            .get('.block-minicart #mini-cart .product-image-photo').should('have.attr', 'src').should('contain', '/media/catalog')
            .get('.block-minicart #mini-cart .minicart-price').contains(/(\d+\,|.\d{1,2})/).and('be.visible')

            .get('.block-minicart #mini-cart .cart-item-qty').should('be.visible').clear().type('3').siblings('.update-cart-item').should('be.visible').click()
            .get('.block-minicart #mini-cart .cart-item-qty').should('have.value', '3')


            // .get('.minicart-wrapper .showcart').click()
            .get('.block-minicart .viewcart').should('be.visible').click().url().should('contain', '/cart')
            .wait(2000)
            .get('.minicart-wrapper .showcart').click()
            .get('.block-minicart .checkout').should('be.visible').click()
            
            .url().should('eq', baseURL + 'checkout/')

            
            //.get('.action-delete').click()
            //.get('.cart-empty').should('be.visible')
    }) 
})  