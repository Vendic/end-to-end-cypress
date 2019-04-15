const baseURL = 'https://staging.cityplants.nl/bosske-cube'

//  PROBLEM //
// I can't find a way to have the test go to or start at a category page.
// to get there the test must navigate there and navigation is different on all sites.

// These tests are written assuming the test runs on the correct page

describe('Category page tests', function() {
    it('[1] Any filters such as product filters, colors, sizes, types of product, etc. [check seo URL]', function() {
        cy.visit(baseURL)
        // kan alleen checken of filters aanwezig zijn, maar welke filters? niet alle sites hebben dezelfde set filters

    })  

    it('[2] Reset all filters to revert page to original content', function() {
        cy.visit(baseURL)
        // VISUAL CHECK
    }) 

    it('[3] Sorting method selection works correctly', function() {
        cy.visit(baseURL)
        // VISUAL CHECK
    }) 

    it('[4] Category specific carousel or showcase', function() {
        cy.visit(baseURL)
        // VISUAL CHECK
    }) 

    it('[5] (optional) Add to Wishlist functionality', function() {
        cy.visit(baseURL)
        // VISUAL CHECK
    }) 

    it('[6] (optional) Compare products as selected', function() {
        cy.visit(baseURL)
        // VISUAL CHECK
    }) 

    it('[7] (optional) Product review stars', function() {
        cy.visit(baseURL)
        cy.get('.product-reviews-summary')
    }) 

    it('[8] List view / grid view', function() {
        cy.visit(baseURL)
        cy.get('.mode-grid').click().get('.products.wrapper').should('have.class', 'products-grid')
        cy.get('.mode-list').click().get('.products.wrapper').should('have.class', 'products-list')
    }) 

    it('[9] Navigation Breadcrumb trail', function() {
        cy.visit(baseURL)
        // VISUAL CHECK
    }) 

    it('[10] Add to Cart button', function() {
        cy.visit(baseURL)
        
    }) 

    it('[11] Meta title / description', function() {
        cy.visit(baseURL)
        
    }) 

    it('[12] Cannonical', function() {
        cy.visit(baseURL)
        
    }) 

    it('[13] Rel=next Rel=prev on pages', function() {
        cy.visit(baseURL)
        
    }) 

    it('[14] Product Price and special price', function() {
        cy.visit(baseURL)
        
    }) 

    it('[15] Product stock status', function() {
        cy.visit(baseURL)
        
    }) 

})