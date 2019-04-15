const baseURL = 'https://staging.plasmavisie.nl/samsung-qe65q9fn-2018'

// These tests are written assuming the test runs on the correct page

describe('Product detail page tests', function() {
    it('[01] Product Data – Title, Description, Price, Special price, Attributes [dont show if empty] , etc', function() {
        // kan alleen checken of filters aanwezig zijn, maar welke filters? niet alle sites hebben dezelfde set filters
        cy.visit(baseURL)
    })  

    it('[2] Product Images', function() {
        // VISUAL CHECK
        cy.get('.product.media img').should('have.attr', 'src').and('contain', '/media/catalog/')
    }) 

    it('[3] Enlarge image (if supported)', function() {
        
    }) 

    it('[4] Related-, Crossell products (Product grid / list should be the same as on category page)', function() {
        
    }) 


    it('[5] Test simple bundle products (if supported)', function() {
        
    }) 


    it('[6] Bundle & Configurable products (anything that requires a dropdown selection before purchase)', function() {
        
    }) 


    it('[7] Price – including VAT, delivery, savings, Tier pricing, etc.', function() {
        
    }) 


    it('[8] (optional) Delivery estimations', function() {
        
    }) 


    it('[9] Stock Checked/Stock Level', function() {
        
    }) 


    it('[10] Add to Cart button', function() {
        
    }) 


    it('[11] Edit QTY', function() {
        
    }) 


    it('[12] Add to compare (if active)', function() {
        
    }) 


    it('[13] Add to whislist (if afctive)', function() {
        
    }) 

    it('[14] Navigation Breadcrumb trail', function() {
        
    }) 

    it('[15] Meta title / description', function() {
        
    }) 

    it('[16] Cannonical', function() {
        
    }) 

    it('[17] Reviews (create / view)', function() {
        
    }) 

    it('[18] Place Holder Image', function() {
        
    }) 


    


    

})