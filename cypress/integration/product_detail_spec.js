const baseURL = 'https://staging.plasmavisie.nl/philips-43pus7303-12'
const one = 'https://staging.cityplants.nl/wolf-garten-sn-m-42-sneeuwschep-42cm-kunststof'
const two = 'https://staging.sossolutions.nl/carberry-board-voor-de-auto-voor-raspberry-pi-nieuwe-model'

// These tests are written assuming the test runs on the correct page

describe('Product detail page tests', function() {

    it('[01] Product Data – Title, Description, Price, Special price, Attributes [dont show if empty] , etc', function() {
        cy.visit(baseURL)
    })  

    it('[2] Product Images', function() {
        // MANUAL CHECK
        cy.get('.product.media img').should('have.attr', 'src').and('contain', '/media/catalog/')
    }) 

    it('[3] Enlarge image (if supported)', function() {
        // MANUAL CHECK
    }) 

    it('[4] Related-, Crossell products (Product grid / list should be the same as on category page)', function() {
        // MANUAL CHECK
        // not all websites have this block activated so checking wether it exists or not is not relevant. 
        // Should be manual check to see if styling is correct if this block exists.
    }) 


    it('[5] Test simple bundle products (if supported)', function() {
        // MANUAL CHECK
        // same as the above ( [4] )
    }) 


    it('[6] Bundle & Configurable products (anything that requires a dropdown selection before purchase)', function() {
        // MANUAL CHECK
    }) 


    it('[7] Price – including VAT, delivery, savings, Tier pricing, etc.', function() {
        cy.visit(baseURL)
        cy.get('.product-info-price [data-role="priceBox"] .price').contains(/(\d+\,|.\d{1,2})/)
    })


    it('[8] (optional) Delivery estimations', function() {
        // MANUAL CHECK
    }) 


    it('[9] Stock Checked/Stock Level', function() {
        // MANUAL CHECK
    }) 


    it('[10] Add to Cart button', function() {
        cy.visit(baseURL)
        cy.get('#product-addtocart-button').should('be.visible')
    }) 


    it('[11] Edit QTY', function() {
        cy.visit(one)
        cy.get('.field.qty input#qty').should('be.visible').clear().type('3').should('be.value', '3')
    }) 

    it('[12] Add to compare (if active)', function() {
        
    }) 


    it('[13] Add to whislist (if afctive)', function() {
        
    }) 

    it('[14] Navigation Breadcrumb trail', function() {
        cy.visit(baseURL)
        cy.get('.breadcrumbs').should('be.visible')
    }) 

    it('[15] Meta title / description', function() {
        cy.visit(baseURL)
        cy.title()
        cy.document().get('head meta[name="description"]')
        .should('have.attr', 'content').and('not.be.empty')
    }) 

    it('[16] Cannonical', function() {
        cy.visit(baseURL)
        cy.document().get('head link[rel="canonical"]')
        .should('have.attr', 'href').and('not.be.empty')
    }) 

    it('[17] Reviews (create / view)', function() {
        
    }) 

    it('[18] Place Holder Image', function() {
        cy.visit(baseURL)
        // TODO - test of img src placeholder of /media/catalog heeft. In  beide gevallen is het goed en klopt de test. 
        // Nu word er afzonderlijk getest (in [2] Product Images) of er product images zijn, en hier of er placeholders zijn.
        cy.get('.product.media img').should('have.attr', 'src').and('contain', 'placeholder')
    }) 

})