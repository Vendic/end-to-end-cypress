const baseURL = 'https://staging.plasmavisie.nl'

describe('Homepage tests', function() {
    it('[01] Meta title / description', function() {
        cy.visit(baseURL)
        cy.title()
    })  
    
    it('[02] Canonical', function() {
        cy.visit(baseURL)
        cy.document().get('head link[rel="canonical"]')
        .should('have.attr', 'href').and('not.be.empty')
    })

    it('[03] Page renders correctly as intended from the original design', function() {
        // cant be automated
    }) 

    it('[04] Header Section – Logo, search box, login/sign-up, shopping cart, links', function() {
        cy.visit(baseURL)

        // logo
        cy.get('.header .logo img')

        // search box
        cy.get('.header .block-search #search').type("Hello, World").should('have.value', 'Hello, World')

        //login/signup
            // TODO

        //shopping cart
        cy.get('.header [data-block="minicart"]')

        // links
            // TODO (onmogelijk? Elke site heeft andere links)

    }) 

    it('[05] Main Navigation (Left menu or horizontal menu) including range titles', function(){
        // MANUAL CHECK
        // is menu visible, is design still intact?
        cy.visit(baseURL)
    })

    it('[7] (optional) Other widgets', function(){
        // MANUAL CHECK
    })

    it('[8] (optional) Featured product boxes', function(){
        // MANUAL CHECK
    })

    it('[9] (optional) Offer boxes', function(){
        // MANUAL CHECK
    })

    it('[10] Footer – Information, About, Links, etc.', function(){
        // MANUAL CHECK
    })

    it('[11] Registration Page, Newsletter subscription (optional) Disable newsletter confirmation email', function(){
        // MANUAL CHECK
    })

    it('[12] Social Networking Links/Widgets', function(){
        // MANUAL CHECK
        // namelijk niet altijd aanwezig op home, en wanneer wel aanwezig niet hetzelfde qua html als andere sites.
    })

    it('[13] Favicon', function(){
        cy.visit(baseURL)
        cy.document().get('head link[rel="icon"]') 
        cy.document().get('head link[rel="shortcut icon"]')
    })


})