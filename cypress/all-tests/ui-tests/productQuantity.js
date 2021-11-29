import AccessoriesPage from "/cypress/page-objects/accessoriesPage"
import SearchResultsPage from "/cypress/page-objects/searchResultsPage"
import ConfigProductPage from "/cypress/page-objects/configProductPage"
import CartPage from "/cypress/page-objects/cartPage"
import {multiplyPrice} from "/cypress/utils/helper"

let product

describe("Changing product quantity task", () => {
    before(()=> {
        cy.fixture("products").then(products => {
            product = products[1] //picking a product without color option for faster addition to the cart
            AccessoriesPage.open().performSearch(product.fullName)
            SearchResultsPage.chooseProductByHeader(product.fullName)
            ConfigProductPage.clickBuyAndConfigureOrder(product.colors)
        })
    })

    it("should be able to change quantity", () => {
        cy.log("GIVEN User is on the cart page")
        CartPage.open()
        cy.log("WHEN A product is validly added to the cart")
        CartPage.itemTitle.should("contain", product.fullName)
        CartPage.selectedQuantity.should("have.attr", "data-selected-quantity", "1")
        
        cy.log("THEN User should be able to change product quantity")
        let targetQuantity = 5 
        CartPage.changeQuantityTo(targetQuantity)
        CartPage.selectedQuantity.should("have.attr", "data-selected-quantity", targetQuantity)
        CartPage.totalPrice.should("have.text", multiplyPrice(product.price, targetQuantity))
    })

    
})