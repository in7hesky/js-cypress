describe("Tasks for Map vs. Object", () => {
    let planets = new Map()

    it("Task 1 - Set planets for Map", () => {
        planets.set("Mercury", {radius: 2440, density: 5.43, distance: 0.395})
        planets.set("Venus", {radius: 6052, density: 5.24, distance: 0.723})
        planets.set("Earth", {radius: 6378, density: 5.52, distance: 1})
        planets.set("Mars", {radius: 3396, density: 3.93, distance: 1.53})
        planets.set("Jupiter", {radius: 71492, density: 1.33, distance: 5.21})
        planets.set("Saturn", {radius: 60268, density: 0.69, distance: 9.551})
        planets.set("Uranus", {radius: 25559, density: 1.27, distance: 19.213})
        planets.set("Neptune", {radius: 24764, density: 1.64, distance: 30.07})
    })

    it("Task 2 - Print planets", () => {
        printPlanets(planets)
    })

    it("Task 3 - Print Saturn data using get()", () => {
        let targetPlanet = "Saturn"
        let output = targetPlanet + ": "

        for(const [key, value] of Object.entries(planets.get(targetPlanet))) {
            output += `${key}: ${value}|`
        }
        cy.log(output)
    })

    it("Task 4 - Print size of Map", () => {
        cy.log(planets.size)
    })

    it("Task 5 - Check if Map has() item from Set", () => {
        new Set(["Mercury", "Not Mercury"]).forEach(planetName => {
            cy.log(`Map contains ${planetName}: ${planets.has(planetName)}`)
        })
    })

    it("Task 6 - Delete Uranus object from Map", () => {
        planets.delete("Uranus")
        printPlanets(planets)
    })

    it("Task 7 - Merge two Maps (Return Uranus)", () => {
        let planetsPool = new Map()
        planetsPool.set("Uranus", {radius: 25559, density: 1.27, distance: 19.213})

        let mergedMap = new Map([...planets, ...planetsPool])
        
        printPlanets(mergedMap)
    })

    it("Task 8 - Print planet as Object", () => {
        let planet = {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395}

        let output = ""
        for(const [key, value] of Object.entries(planet)) {
            output += `${key}: ${value}|`
        }

        cy.log(output)
    })

})

const printPlanets = planets => {
    planets.forEach((value, key) => {
        cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]).join(', '))
     })      
}