import Chance from "chance"

class ConfigProductPage {
    get buyButton() {
        return cy.get("button.transaction").first()
    }

    get addToCartButton() {
        return cy.contains("Add To Cart").first()
    }

    get goToCartButton() {
        return cy.contains("Go to cart")
    }

    clickBuyAndConfigureOrder(productColors) {
        this.buyButton.click()
        let colorOption = "none"
        if(productColors !== "none") {
            colorOption = new Chance().pickone(productColors)
            this.chooseColor(colorOption)
            this.addToCartAndSwitchToIt()
        }

        cy.get("span[data-test-items-count]", {timeout: 5000}).should("be.visible")
        return colorOption
    }

    chooseColor(color) {
        cy.wait(2000)
        cy.get(`button[aria-label*='${color}']`).click()
        cy.wait(2000)
    }

    addToCartAndSwitchToIt() {
        this.addToCartButton.click()
        this.goToCartButton.click()
    }
}

export default new ConfigProductPage()