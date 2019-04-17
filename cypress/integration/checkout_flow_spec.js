let baseURL = 'https://staging.plasmavisie.nl/'
let userName = 'robbert@vendic.nl'
let firstName = 'Robbert'
let lastName = 'Gijsberts'
let companyName = 'Vendic'
let streetName = 'Keulenstraat'
let number = '9'
let city = 'Deventer'
let postcode = '7418ET'
let telephone = '0570745440'


describe('Test the checkout flow', function() {

    it('Should navigate to a product', function() {
        cy.visit(baseURL)
        
        cy.get('.navigation')
            .should('be.visible')
            .get('ul li.nav-1 a')
            .click()
            .url().should('contain', '/led-televisie')
    })

    it('Clicks on a product, visits the product detail page and adds product to cart', function() {
        cy.get('.products-grid .product-items .product-item').eq(0)
        .find('a.product').click()
        .get('#product-addtocart-button').should('be.visible')
        .wait(2000)  
        .click()
        cy.get('.page.messages [data-bind="html: message.text"] a').should('contain', 'je winkelmand').click()
        .url().should('contain', '/cart')      
        .get('.cart.item .photo.image').should('have.attr', 'src').should('contain', '/media/catalog/')      
        cy.wait(150)
        cy.get('.checkout-methods-items button').click({ force: true })          
    })

    it('Enters customer information', function() {
        cy.server()
        cy.route('POST','**/estimate-shipping-methods').as('toCheckout')
        .wait(6000)
        // cy.wait('@toCheckout')
        cy.get('#checkout-step-shipping [name="username"]').type(userName).should('have.value', userName)
        cy.get('#checkout-step-shipping [name="firstname"]').type(firstName).should('have.value', firstName)
        cy.get('#checkout-step-shipping [name="lastname"]').type(lastName).should('have.value', lastName)
        cy.get('#checkout-step-shipping [name="street[0]"]').type(streetName).should('have.value', streetName)
        cy.get('#checkout-step-shipping [name="street[1]"]').type(number).should('have.value', number)
        cy.get('#checkout-step-shipping [name="city"]').type(city).should('have.value', city)
        cy.get('#checkout-step-shipping [name="postcode"]').type(postcode).should('have.value', postcode)
        cy.get('#checkout-step-shipping [name="telephone"]').type(telephone).should('have.value', telephone)
        cy.get('.table-checkout-shipping-method input[value="tig_postnl_regular"]').check()
        cy.get('#shipping-method-buttons-container [data-role="opc-continue"]').click()
        .wait(3000)
        cy.get('.opc-progress-bar-item._active span').contains('Overzicht & betalen')
        cy.get('#cashondelivery').click()
        cy.get('.payment-method._active').find('.actions-toolbar button.checkout[type="submit"]').click()
        .wait(6000)
        .url().should('contain', '/checkout/onepage/success/')
    })
 

    it('Should navigate to a product, add it to the cart and remove it', function() {                       
            
            // UPDATE QTY IN CART
                // .get('[data-role="cart-item-qty"]').clear().type('2').wait(1000).get('button[data-cart-item-update]').click()
                // .get('[data-role="cart-item-qty"]').should('have.value', '2')

            // REMOVE FROM CART 
                //.get('.action-delete').click()
                //.get('.cart-empty').should('be.visible')

            // MINI CART CHECKS
                // .get('.minicart-wrapper .showcart').click()
                // .get('.block-minicart #mini-cart .product-image-photo').should('have.attr', 'src').should('contain', '/media/catalog')
                // .get('.block-minicart #mini-cart .minicart-price').contains(/(\d+\,|.\d{1,2})/).and('be.visible')
                // .get('.block-minicart #mini-cart .cart-item-qty').should('be.visible').clear().type('3').siblings('.update-cart-item').should('be.visible').click()
                // .get('.block-minicart #mini-cart .cart-item-qty').should('have.value', '3')


            // via minicart naar basket
            // functies maken van bijv. add-to-cart om te hergebruiken. De ene via de success alert en de ander via de mini basket
            // mini basket hoeft nu niet per se gecheckt te worden
    }) 
})  