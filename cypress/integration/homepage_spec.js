const baseURL = 'https://staging.cityplants.nl'

describe('Homepage tests', function() {
    it('[01] Meta title / description', function() {
        cy.title()
    })  
    
    
    it('Header Section – Logo, search box, login/sign-up, shopping cart, links', function(){
        // Visit baseurl homepage
        cy.visit(baseURL)

        // Header Section checks
        cy.get('.header .logo img')
        cy.get('.header .block-search #search')
        cy.get('.header [data-block="minicart"]')
    })

    it('Main Navigation including range titles', function(){
        // VISUAL CHECK
        // is menu visible, is design still intact?
    })

    it('Footer – Information, About, Links, etc.', function(){
        // are these links present?
        // do they link? 404 ?
        // TO DO - find out how to detect 404. Plasma and CityPlants are both different. CityPlants doesnt even show a 404
    })
})