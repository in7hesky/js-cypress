import Chance from "chance"

const chance = new Chance()

describe("Generate Age and print it's range", () => {
    //cannot use switch operator since it just compares single values and cannot compare value with range
    //i use it to choose a log message by age group instead
    //prereqs (inclusive - noninclusive):
    //child 0 - 12, teen 12 - 18, adult 18 - 65, senior - 65 and above.
    //couldn't get any child or teen using generic chance.age(), code below make chances equal
    let age = chance.pickone([
        chance.age({type: "child"}),
        chance.age({type: "teen"}),
        chance.age({type: "adult"}),
        chance.age({type: "senior"})
    ])

    it("Check range using if-else", () => {
        let ageGroup
        if (age < 12) {
            ageGroup = "Child"
        } else if (age < 18) {
            ageGroup = "Teen"
        } else if (age < 65) {
            ageGroup = "Adult"
        } else {
            ageGroup = "Senior"
        }

        printAgeGroup(ageGroup)
    })

    it("Check range using ternary operator", () => {
        let ageGroup = age < 12 ? "Child" : age < 18 ? "Teen" : age < 65 ? "Adult" : "Senior"

        printAgeGroup(ageGroup)

        switch(ageGroup) {
            case "Child":
            case "Teen":
                cy.log("cannot buy a beer")
                break
            default:
                cy.log("can buy a beer!")
        }
    })

    const printAgeGroup = ageGroup => cy.log(`ageValue: ${age}, ageGroup: ${ageGroup}`)

    
})