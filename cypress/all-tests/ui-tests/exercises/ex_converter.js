import ConverterPage from "/cypress/page-objects/converterPage"
import Chance from "chance"

const chance = new Chance()

describe("Conversion task from Arrays section", () => {

    it("should display correct conversion rate (FAILS)", () => {
        cy.fixture("ex_converterData").then(data => {
            let randomCurrency = chance.pickone(data.rates)
            cy.log("GIVEN User is at Converter page")
            ConverterPage.open()   

            cy.log("WHEN User selects currencies")
            cy.log("AND presses 'Convert' button")
            let resultRateField = ConverterPage.chooseCurrenciesAndConvert(data.base, randomCurrency.shortName)
            
            cy.log("THEN Correct conversion rate is displayed")
            resultRateField.invoke("text").then(text => {
                let resultRate = text.split(" ")[0]
                expect(resultRate).to.eq(randomCurrency.rate)
            })
        })
    })
})