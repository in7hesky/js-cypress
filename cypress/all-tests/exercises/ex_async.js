const TARGET_URL = "https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916"


describe("Tasks for Async", () => {
    before(() => {
        cy.request(TARGET_URL).its("body.filter_groups").as("productsData")
    })

    it("Products info from request in before()", () => {
        cy.get("@productsData").then(productsData => {
            let phonesList = productsData[0].subfilters[0].filters
            printPhonesInfo(phonesList)
        })
    })

    it("Products info from request in 'it' block itself", () => {
        cy.request(TARGET_URL).then(response => {
            cy.wrap(response.body).as("productsData2")
        })

        cy.get("@productsData2").then(productsData => {
            let phonesList = productsData.filter_groups[0].subfilters[0].filters
            printPhonesInfo(phonesList)
        })
    })

    const printPhonesInfo = phonesList => {
        cy.log(`PHONES_AMOUNT: ${phonesList.length}`)

        cy.log("FIRST_PRODUCT_DATA:")
        for(let key in phonesList[0]) {
            cy.log(`${key}: ${phonesList[0][key]}`)
        }
    }
})