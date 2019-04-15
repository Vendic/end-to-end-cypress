const baseURL2 = 'https://staging.cityplants.nl/bosske-cube'
const baseURL = 'https://staging.plasmavisie.nl/4k-ultra-hd-tv'

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
        // TODO
        // VISUAL
    }) 

    it('[3] Sorting method selection works correctly', function() {
        cy.visit(baseURL)
        // TODO
        // VISUAL
    }) 

    it('[4] Category specific carousel or showcase', function() {
        cy.visit(baseURL)
        // TODO
        // VISUAL
    }) 

    it('[5] (optional) Add to Wishlist functionality', function() {
        cy.visit(baseURL)
        // TODO
        // VISUAL
    }) 

    it('[6] (optional) Compare products as selected', function() {
        cy.visit(baseURL)
        // TODO
        // VISUAL
    }) 

    it('[7] (optional) Product review stars', function() {
        cy.visit(baseURL)
        cy.get('.product-reviews-summary').should('be.visible')
    }) 

    it('[8] List view / grid view', function() {
        cy.visit(baseURL)
        cy.get('.toolbar.toolbar-products:first-child .mode-grid').click().get('.products.wrapper').should('have.class', 'products-grid')
        cy.get('.toolbar.toolbar-products:first-child .mode-list').click().get('.products.wrapper').should('have.class', 'products-list')
    }) 

    it('[9] Navigation Breadcrumb trail', function() {
        cy.visit(baseURL)
        cy.get('.breadcrumbs')
    }) 

    it('[10] Add to Cart button', function() {
        cy.visit(baseURL)
        cy.get('.product-item [data-role="tocart-form"]')
    }) 

    it('[11] Meta title / description', function() {
        cy.visit(baseURL)
        cy.title()
        cy.document().get('head meta[name="description"]')
        .should('have.attr', 'content').and('not.be.empty')
    }) 

    it('[12] Cannonical', function() {
        cy.visit(baseURL)
        cy.document().get('head link[rel="canonical"]')
        .should('have.attr', 'href').and('not.be.empty')
    }) 

    it('[13] Rel=next Rel=prev on pages', function() {
        cy.visit(baseURL)
        // TODO
    }) 

    it('[14] Product Price and special price', function() {
        cy.visit(baseURL)
        // TODO 
        // VISUAL ?
    }) 

    it('[15] Product stock status', function() {
        // TODO
        // VISUAL        
    }) 

})