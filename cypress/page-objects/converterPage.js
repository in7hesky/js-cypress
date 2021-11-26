class ConverterPage {
    open() {
        cy.visit("https://www.xe.com/currencyconverter")
        this.acceptCookiesButton.click()
    }

    get acceptCookiesButton() {
        return cy.get("button").contains("Accept")
    }

    get baseCurrencyField() {
        return cy.get("#midmarketFromCurrency")
    }

    get toCurrencyField() {
        return cy.get("#midmarketToCurrency")
    }

    get convertButton() {
        return cy.get("button[type='submit']")
    }

    get rateResult() {
        return cy.get(".faded-digits").parent()
    }

    chooseCurrenciesAndConvert(baseCurrency, toCurrency) {
        this.baseCurrencyField.type(`${baseCurrency}{enter}`)
        this.toCurrencyField.type(`${toCurrency}{enter}`)
        this.convertButton.click()

        return this.rateResult
    }
}

export default new ConverterPage()