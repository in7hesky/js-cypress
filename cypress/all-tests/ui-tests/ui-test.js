import AccessoriesPage from "/cypress/page-objects/accessoriesPage"
import SearchResultsPage from "/cypress/page-objects/searchResultsPage"


describe("UI tests for Google Store", () => {
    before(() => {
        cy.fixture("product").then(data => {
            cy.wrap(data).as("productData")
        })
    })

    //------WITHOUT-PAGE-OBJECTS------
    // it("Correct Search Result", () => {
    //     cy.visit("https://store.google.com/us/collection/accessories_wall?hl=en-US")
    //     cy.get("div[data-test='header-search']").click()
    //     cy.get("input[placeholder='Search Google Store']").type(`Google Pixel Buds{enter}`)
    //     cy.get("a[href='/product/pixel_buds_a_series']").should("exist")
    // })

    it("Correct Search Result", () => {
            cy.get("@productData").then(productData => {

                cy.log("GIVEN User is at Accessories Page")
                AccessoriesPage.open()
        
                cy.log("WHEN User performs searching by name")
                AccessoriesPage.performSearch(productData.name)
                
                cy.log("THEN Appropriate product displayed")
                SearchResultsPage.getProductByDocId(productData.url).should("exist")
            }) 
        })
})
