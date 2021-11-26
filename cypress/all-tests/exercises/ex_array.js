describe("Tasks for array", () => {
    let planets = [
        {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
        {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
        {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
        {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
        {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
        {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
        {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
        {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
    ]

    it("Task 1 - Print planets", () => {
        printPlanets(planets)
    })

    it("Task 2 - Add entry solarSystem", () => {
        planets.forEach(planet => {
            planet['solarSystem'] = true
        })

        printPlanets(planets)
    })

    it("Task 3 - Add a particular planet", () => {
        planets.push({planet: "SomeNewPlanet", radius: 24764,
                    density: 1.64, distance: 30.07, solarSystem: false})

        printPlanets(planets)
    })

    it("Task 4 - Radius sum using reduce()", () => {
        cy.log(planets.reduce((acc, curVal) => acc + curVal.radius, 0))
    })

    it("Task 5 - Filter() planets by distance ", () => {
        cy.log("--should-show-with-distance-of-5-and-above--")
        printPlanets(getPlanetsOfMinDistanceAndAbove(planets, 5))
    })

    it("Task 6 - Delete SomeNewPlanet using splice()", () => {
        let targetIndex
        for(let i = 0; i < planets.length; i++) {
            if (planets[i].planet === "SomeNewPlanet")
                targetIndex = i
        }

        planets.splice(planets.length - 1, 1)

        printPlanets(planets)

    })

    it("Task 7 - Sort planets by radius using sort()", () => {
        planets.sort((a, b) => a.radius - b.radius)
        printPlanets(planets)
    })

    it("Task 8 - Sort planets by name using sort()", () => {
        planets.sort((a, b) => a.planet.localeCompare(b.planet))
        printPlanets(planets)
    })

    it("Task 9 - Print length of the array", () => {
        cy.log(planets.length)
    })

    //task 10 is in the UI tests where other UI tests are placed
})

const printPlanets = (planets) => {
    planets.forEach(planet => {
        let planetDescription = ""

        for (const [key, value] of Object.entries(planet)) {
            planetDescription += `${key}: ${value} |`
        }
        
        cy.log(planetDescription)
    })
}

const getPlanetsOfMinDistanceAndAbove = (planets, minDistance) =>
    planets.filter(planet => planet.distance >= minDistance)
