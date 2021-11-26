import Chance from "chance"
import {isSuperSet, intersection, union, difference}
from "/cypress/utils/helper"

describe('Tasks for SET', () => {

    it('Task 1 - Init Set', () => {
        let currencies = new Set();

        currencies.add("RUR")
        currencies.add("BYN")
        currencies.add("USD")

        expect(currencies).to.have.all.keys("RUR", "BYN", "USD")
    })

    it('Task 2 - Print Set', () => {
        new Set(["USD", "RUR", "BYN"]).forEach(item => {
            cy.log(item)
        })
    })

    it('Task 3 - Add existing values', () => {
        let currencies = new Set(["USD", "RUR", "BYN"])

        currencies.add("USD"); // should be skipped
        currencies.add("EUR") // should be added

        expect(currencies.size).to.be.eq(4);
    })

    it('Task 4 - Check if set has a value', () => {
        let currencies = new Set(["USD", "RUR"])

        cy.log("Set has RUR: " + currencies.has("RUR"))

        currencies.delete("RUR")
        cy.log("Set has RUR: " + currencies.has("RUR"))

        expect(currencies.size).to.eq(1)
    })

    it('Task 5 - Random value picking', () => {
        let currencies = new Set(["USD", "RUR", "BYN", "UAN", "EUR"])
        let chance = new Chance();

        cy.log("Randomly picked value: " + chance.pickone([...currencies]))

        cy.log("Picking 3 random values:")
        let currenciesArr = [...currencies]
        for(let i = 0; i < 3; i++) {
            cy.log(chance.pickone(currenciesArr))
        }

        cy.log("Picking a subset of random size. Values are:")
        let pickedSet = chance.pickset(
            currenciesArr, chance.integer({min:1, max:currenciesArr.length}))

        pickedSet.forEach(item => cy.log(item))
    })

    it("Task 6 - Custom functions", () => {
        let setA = new Set([1, 2, 3, 4]),
            setB = new Set([2, 3]),
            setC = new Set([3, 4, 5, 6]);

        cy.log("Intersection of setA and setB: ")
        intersection(setA, setB).forEach(item => cy.log(item))

        cy.log("Union of setA and setC: ")
        union(setA, setC).forEach(item => cy.log(item))

        cy.log("Difference of setA and setB: ")
        difference(setA, setB).forEach(item => cy.log(item))

        cy.log("SetA is superset of setB: " + isSuperSet(setA, setB))
        cy.log("SetA is superset of setC: " + isSuperSet(setA, setC))
    })

  })
