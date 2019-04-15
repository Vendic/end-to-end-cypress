const baseURL = 'https://staging.huissteden.nl'

// These tests are written assuming the test runs on the correct page

describe('Search tests', function() {
    it('[01] Keyword Search', function() {
        cy.visit(baseURL)
        cy.get('.header .block-search #search')
            .clear()
            .type("a")
            .should('have.value', 'a')
            .get('.action.search')
            .click()
            .get('.breadcrumbs .item.search strong')
            .contains('Zoekresultaten')
        

    })  

    it('[2] Sort by', function() {
        // checks only if sorting element is present on the page. Not wether it works or not
        cy.visit(baseURL)
        cy.get('.header .block-search #search')
            .clear()
            .type("a")
            .should('have.value', 'a')
            .get('.action.search')
            .click()
            .get('.toolbar-sorter.sorter #sorter')
    }) 

    it('[3] Results Page & Pagination', function() {
        cy.visit(baseURL)
        cy.get('.header .block-search #search')
            .clear()
            .type("a")
            .should('have.value', 'a')
            .get('.action.search')
            .click()
            .get('.toolbar-products .pages')
    }) 

    it ('[04] Instant search (product: thumbnail | title | price) (categories: breadcrums with related categories)', function() {
        cy.visit(baseURL)
        cy.get('.header .block-search #search')
        .clear()
        .type("abc")
        .should('have.value', 'abc')
        .get('.minisearch')
        // search for UL in the minisearch element 

    })

})