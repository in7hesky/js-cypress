import Chance from "chance"

describe('example reqres.io tests', () => {
  
  beforeEach(() => {
      //cy.visit('https://example.cypress.io/todo')
    })
  
    it("Positive: post a user", ()=>{
      cy.fixture("user").then(user => {
        cy.request("POST", "/api/users", user).then(response => {
          expect(response.status).to.eq(201)
          expect(response.body).to.have.property("name", user.name)
          expect(response.body).to.have.property("job", user.job)
        })
      })
    })

    let testingData = [
      {
        description: "Max values",
        requestData: {
          name: Chance().string({length: 100}),
          job: Chance().string({length: 100})
        }
      },
      {
        description: "Min values",
        requestData: {
          name: Chance().string({length: 1}),
          job: Chance().string({length: 1})
        }
      }
    ]

    testingData.forEach(({description, requestData}) => {
      it(`Positive: post a user using ${description}`, ()=>{
          cy.request("POST", "/api/users", requestData).then(response => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property("name", requestData.name)
            expect(response.body).to.have.property("job", requestData.job)
          })
      })
    })

    it("Negative: login unsuccessful", ()=>{
        cy.request({
          method: "POST", url: "/api/login",
          failOnStatusCode: false, body: {
        "email": "fre@gmail.com"
      }}).then(response => {
        expect(response.status).to.eq(400)
      })
    })

    

    it('Example test', () => {
        expect(1 + 2).to.eq(3)
    })
})