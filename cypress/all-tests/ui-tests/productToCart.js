import AccessoriesPage from "/cypress/page-objects/accessoriesPage"
import SearchResultsPage from "/cypress/page-objects/searchResultsPage"
import ConfigProductPage from "/cypress/page-objects/configProductPage"
import CartPage from "/cypress/page-objects/cartPage"
import Chance from "chance"

const chance = new Chance()
const products = require("/cypress/fixtures/products")

describe("UI testing tasks", () => {

    products.forEach(product => {
        it(`should add ${product.fullName} to cart with correct data`, () => {    
            cy.log("GIVEN User is on the accessories page")
            cy.log("AND performs search for product")
            AccessoriesPage.open().performSearch(product.fullName)
            
            cy.log("WHEN User adds appropriate product to the cart")
            SearchResultsPage.chooseProductByHeader(product.fullName)
            let colorOption = ConfigProductPage.clickBuyAndConfigureOrder(product.colors)
            
            cy.log("THEN there should be only one product title in cart")
            CartPage.addedItems.should("have.length", 1)
            cy.log("AND product tite should be correct")
            CartPage.itemTitle.should("contain", product.fullName)
            if(colorOption !== "none") {
                cy.log("AND product should be of correct color")
                CartPage.itemTitle.should("contain", colorOption) 
            }
            cy.log("AND product quantity should equal 1")
            CartPage.selectedQuantity.should("have.attr", "data-selected-quantity", "1")
            cy.log("AND item price should be correct")
            CartPage.itemPrice.should("have.text", product.price)
            cy.log("AND total price should equal to product price")
            CartPage.totalPrice.should("have.text", product.price)
        })
    })

    
})