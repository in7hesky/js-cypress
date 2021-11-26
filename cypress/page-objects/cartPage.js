class CartPage {
    open() {
        cy.visit(`${Cypress.env("googleURL")}/cart?hl=en-US`)
    }

    get addedItems() {
        return cy.get("section[data-test-cart-items-section]")
    }

    get itemTitle() {
        return this.addedItems.find("a[data-test-lineitem-title]")
    }

    get selectedQuantity() {
        return this.addedItems.find("select")
    }

    get itemPrice() {
        return this.addedItems.find("p[data-test-line-item-price]")
    }

    get totalPrice() {
        return cy.get("span[data-test-price-subtotal]")
    }

    changeQuantityTo(newQuantity) {
        this.selectedQuantity.select(newQuantity - 1)
    }
}

export default new CartPage()